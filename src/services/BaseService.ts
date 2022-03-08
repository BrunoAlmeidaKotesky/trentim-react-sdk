import { DefaultCatch } from 'catch-decorator-ts';
import { sp, SPRest, registerCustomRequestClientFactory } from '@pnp/sp';
import type {AllTypes} from './IFakeImport';
import type { IRequestClient } from "@pnp/common";
import type { IItemAddResult, IItemUpdateResult } from "@pnp/sp/items";
import type { IFileAddResult, IFileInfo } from '@pnp/sp/files';
import type { IAttachmentFileInfo } from '@pnp/sp/attachments';
import type { ISPUser } from '../models/interfaces/ISPUser';
import type { PermissionKind } from '@pnp/sp/security';
import type { PnpModules, IBaseItemKey, IItemVersionInfo, ITypedHash, PreviousUnion, IQueryOptions } from './IBaseServiceConfig';

declare const types: AllTypes;
export class BaseService {
    public sp: SPRest;
    constructor(public injectedModules: PnpModules[], private requestClientFactory?: () => IRequestClient) {
        if(this.requestClientFactory) 
            registerCustomRequestClientFactory(this.requestClientFactory);
        this.loadModules(this.injectedModules).then(_ => {
            this.sp = sp.configure({ headers: { 'Origin': window.location.origin } }, window.location.origin);
        });
    }

    private async loadModules(injectedModules: PnpModules[]): Promise<void> {
        for (const module of injectedModules) {
            const res = await import(module);
            if (!res) {
                console.log(`Module ${res?.default?.name} failed to load.`);
            }
        }
    }

    private baseItemsSelect: IBaseItemKey = ['Id', 'Title', 'Created', 'Modified'];
    private uniqueSelect = (select: string[]) => {
        if (!select?.length)
            return [];
        return [...new Set(select.concat(this.baseItemsSelect))];
    }

    public removeOData<T>(baseArr: T[]): T[] {
        return baseArr?.filter(item => {
            for (const key in item)
                if (key?.includes('odata'))
                    delete item[key];
            return true;
        });
    }

    @DefaultCatch((err) => { console.error(err); return []; })
    public async getItems<T>(identifier: string, { filters = null, expand = null, cache = null, top = null, orderBy = null, getBy = 'Title' }: IQueryOptions, ...select: string[]): Promise<T[]> {
        if (!getBy)
            getBy = 'Title';
        const lists = this.sp.web.lists[`getBy${getBy}`](identifier);
        const query = lists.items
            .expand(...expand ?? [])
            .select(...this.uniqueSelect(select) ?? [])
            .filter(filters ?? `Id ne null`)
            .orderBy(orderBy?.column ?? 'Id', orderBy?.ascending !== undefined ? orderBy.ascending : true)
            .top(top || 9999999);
        if (!cache)
            return await query.get<T[]>();
        return query.usingCaching(cache).get<T[]>();
    }

    @DefaultCatch((err) => { console.error(err); return null; })
    public async getItem<T>(identifier: string, itemId: number, options: IQueryOptions, ...select: string[]): Promise<T> {
        options = { ...options, getBy: options?.getBy ?? 'Title' }
        const res = await this.getItems<T>(identifier, { ...options, filters: options?.filters ? `${options?.filters} and Id eq ${itemId}` : `Id eq ${itemId}` }, ...select);
        if (res?.length > 0)
            return res[0];
        return null;
    }

    @DefaultCatch((err) => { console.error(err); return null })
    public async saveItem<T>(listTitle: string, hash: ITypedHash<T>): Promise<IItemAddResult> {
        return await this.sp.web.lists.getByTitle(listTitle).items.add(hash);
    }

    @DefaultCatch((err) => { console.error(err); return null })
    public async updateItem<T>(listTitle: string, itemId: number, hash: ITypedHash<T>): Promise<IItemUpdateResult> {
        return await this.sp.web.lists.getByTitle(listTitle).items.getById(itemId).update(hash);
    }

    @DefaultCatch((err) => { console.error(err); return null; })
    private async getItemByIdSelect(listTitle: string, getBy: 'Title' | 'Id' = 'Title', ...select: string[]) {
        return this.sp.web.lists[`getBy${getBy}`](listTitle).items.select(...this.uniqueSelect(select)).top(9999999);
    }

    @DefaultCatch((err) => { console.error(err); return null; })
    public async getPreviousVersions<T, R = PreviousUnion<T, IItemVersionInfo>[]>
        (listTitle: string, itemId: number, { filters = null, expand = null, getBy = 'Title', orderBy }: Pick<IQueryOptions, 'filters' | 'expand' | 'getBy' | 'orderBy'>, ...select: string[]): Promise<R> {
        const defaultSelect = ['IsCurrentVersion', 'Created', 'VersionId', 'VersionLabel', 'Modified'];
        const orderTuple: [string, boolean] = orderBy ? [orderBy?.column, orderBy?.ascending || false] : ['Created', true];
        const baseItem = await this.getItemByIdSelect(listTitle, getBy, ...select);
        if (!filters) {
            if (!expand)
                return await baseItem.getById(itemId).versions.select(...select, ...defaultSelect)
                    .orderBy(orderTuple[0], orderTuple[1]).get<R>();
            return await baseItem.expand(...expand).getById(itemId).versions.select(...select, ...defaultSelect).expand(...expand)
                .orderBy(orderTuple[0], orderTuple[1]).get<R>();
        }
        else {
            if (!expand)
                return await baseItem.getById(itemId).versions.filter(filters).select(...select, ...defaultSelect)
                    .orderBy(orderTuple[0], orderTuple[1]).get<R>();
            return await baseItem.expand(...expand).getById(itemId).versions.select(...select, ...defaultSelect).filter(filters).expand(...expand)
                .orderBy(orderTuple[0], orderTuple[1]).get<R>();
        }
    }

    @DefaultCatch((err) => console.error(err))
    public async deleteItem(listTitle: string, itemId: number) {
        await this.sp.web.lists.getByTitle(listTitle).items.getById(itemId).delete();
    }

    @DefaultCatch((err) => { console.error(err); return false; })
    public async sendAttatchments(listName: string, itemId: number, attachments: IAttachmentFileInfo[]) {
        await this.sp.web.lists.getByTitle(listName).items.getById(itemId).attachmentFiles.addMultiple(attachments);
        return true;
    }

    @DefaultCatch((err) => console.error(err))
    public async addFileToLibrary(libraryUrl: string, folderUrl: string, content: File): Promise<IFileAddResult> {
        const chunkSize = 40960;
        const fileAddRes = await this.sp.web.getFolderByServerRelativeUrl(libraryUrl).files.addChunked(folderUrl, content, (data) => {
            const percent = (data.blockNumber / data.totalBlocks);
            console.log(percent);
        }, true, chunkSize);
        console.log("File upload succeded");
        return fileAddRes;
    }

    @DefaultCatch((err) => console.error(err))
    public async addMultipleFilesToLibrary(files: { name: string, content: File, libraryUrl: string }[], progressCallback?: (generalPorcentage: number, individual: { currentName: string, currentPercentage: number }) => void) {
        type byte = 1000000;
        const chunkSize: byte = 1000000;
        const accumulatorPercent: number[] = [];
        let realTotalPercentage: number = 0;
        files.forEach(_ => accumulatorPercent.push(0));
        const result = await Promise.allSettled(files.map((f, idx) => {
            return this.sp.web.getFolderByServerRelativeUrl(f.libraryUrl).files.addChunked(f.name, f.content, (data) => {
                const totalBlocks = data.fileSize <= chunkSize ? 1 : data.totalBlocks;
                const individualPercentage = (data.blockNumber / totalBlocks);
                if (accumulatorPercent[idx] < 1)
                    accumulatorPercent[idx] = individualPercentage;
                realTotalPercentage = (accumulatorPercent?.reduce((a, b) => a + b, 0) / files?.length);
                if (progressCallback)
                    progressCallback(realTotalPercentage, { currentName: f.name, currentPercentage: individualPercentage });
            }, true, chunkSize);
        }));
        return {
            result,
            percentage: realTotalPercentage
        };
    }

    @DefaultCatch((err) => { console.error(err); return []; })
    public async getItemAttachments(listTitle: string, itemId: number) {
        return await this.sp.web.lists.getByTitle(listTitle).items.getById(itemId).attachmentFiles.get();
    }

    @DefaultCatch((err) => { console.error(err); return null; })
    public async getCurrentUser(): Promise<ISPUser> {
        const userInfo = await this.sp.web.currentUser.get() as ISPUser;
        const context = await this.sp.site.getContextInfo();
        const isExternal = userInfo.LoginName.includes("#ext#");
        userInfo.IsExternalUser = isExternal;
        userInfo.ProfilePic = `${context.SiteFullUrl}/_layouts/15/userphoto.aspx?accountname=${userInfo?.Email}`;
        return userInfo;
    }

    @DefaultCatch((err) => { console.error(err); return []; })
    public async getFileItemData<T>(identifier: string, files: IFileInfo[], { expand = null, getBy = 'Id' }: IQueryOptions, ...select: string[]) {
        const _files = await Promise.all(files?.map(async file => {
            const fileInfo = await this.getItems<T>(identifier, { expand, filters: `FileLeafRef eq '${file?.Name}'`, getBy: getBy ?? 'Title' }, ...select);
            if (fileInfo?.length >= 1)
                return this.removeOData([{ ...file, data: this.removeOData(fileInfo)[0] }])[0];
            return { ...file, data: null };
        }));
        return _files;
    }

    @DefaultCatch((err) => { console.error(err); })
    public async hasItemPermission(list: string, itemId: number, opt: { getBy?: 'Id' | 'Title', permissionType: PermissionKind }) {
        const getBy = opt?.getBy || 'Id';
        const _list = this.sp.web.lists[`getBy${getBy}`](list);
        const item = _list.items.getById(itemId);
        const hasPermission = await item.currentUserHasPermissions(opt.permissionType);
        return hasPermission;
    }
}