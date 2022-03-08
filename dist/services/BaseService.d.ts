import { SPRest } from '@pnp/sp';
import type { IRequestClient } from "@pnp/common";
import type { IItemAddResult, IItemUpdateResult } from "@pnp/sp/items";
import type { IFileAddResult, IFileInfo } from '@pnp/sp/files';
import type { IAttachmentFileInfo } from '@pnp/sp/attachments';
import type { ISPUser } from '../models/interfaces/ISPUser';
import type { PermissionKind } from '@pnp/sp/security';
import type { PnpModules, IItemVersionInfo, ITypedHash, PreviousUnion, IQueryOptions } from './IBaseServiceConfig';
export declare class BaseService {
    injectedModules: PnpModules[];
    private factory?;
    _sp: SPRest;
    constructor(injectedModules: PnpModules[], factory?: () => IRequestClient);
    private loadModules;
    private baseItemsSelect;
    private uniqueSelect;
    removeOData<T>(baseArr: T[]): T[];
    getItems<T>(identifier: string, { filters, expand, cache, top, orderBy, getBy }: IQueryOptions, ...select: string[]): Promise<T[]>;
    getItem<T>(identifier: string, itemId: number, options: IQueryOptions, ...select: string[]): Promise<T>;
    saveItem<T>(listTitle: string, hash: ITypedHash<T>): Promise<IItemAddResult>;
    updateItem<T>(listTitle: string, itemId: number, hash: ITypedHash<T>): Promise<IItemUpdateResult>;
    private getItemByIdSelect;
    getPreviousVersions<T, R = PreviousUnion<T, IItemVersionInfo>[]>(listTitle: string, itemId: number, { filters, expand, getBy, orderBy }: Pick<IQueryOptions, 'filters' | 'expand' | 'getBy' | 'orderBy'>, ...select: string[]): Promise<R>;
    deleteItem(listTitle: string, itemId: number): Promise<void>;
    sendAttatchments(listName: string, itemId: number, attachments: IAttachmentFileInfo[]): Promise<boolean>;
    addFileToLibrary(libraryUrl: string, folderUrl: string, content: File): Promise<IFileAddResult>;
    addMultipleFilesToLibrary(files: {
        name: string;
        content: File;
        libraryUrl: string;
    }[], progressCallback?: (generalPorcentage: number, individual: {
        currentName: string;
        currentPercentage: number;
    }) => void): Promise<{
        result: PromiseSettledResult<IFileAddResult>[];
        percentage: number;
    }>;
    getItemAttachments(listTitle: string, itemId: number): Promise<import("@pnp/sp/attachments").IAttachmentInfo[]>;
    getCurrentUser(): Promise<ISPUser>;
    getFileItemData<T>(identifier: string, files: IFileInfo[], { expand, getBy }: IQueryOptions, ...select: string[]): Promise<{
        data: T;
        "odata.id": string;
        CheckInComment: string;
        CheckOutType: number;
        ContentTag: string;
        CustomizedPageStatus: number;
        ETag: string;
        Exists: boolean;
        IrmEnabled: boolean;
        Length: string;
        Level: number;
        LinkingUri: string;
        LinkingUrl: string;
        ListId: string;
        MajorVersion: number;
        MinorVersion: number;
        Name: string;
        ServerRelativeUrl: string;
        SiteId: string;
        TimeCreated: string;
        TimeLastModified: string;
        Title: string;
        UIVersion: number;
        UIVersionLabel: string;
        UniqueId: string;
        WebId: string;
    }[]>;
    hasItemPermission(list: string, itemId: number, opt: {
        getBy?: 'Id' | 'Title';
        permissionType: PermissionKind;
    }): Promise<boolean>;
}
