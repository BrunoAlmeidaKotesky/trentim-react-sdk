import type { ICachingOptions } from "@pnp/odata";

export type PnpModules = 
'@pnp/sp/attachments' | 
'@pnp/sp/items' | 
'@pnp/sp/lists' | 
'@pnp/sp/navigation' | 
'@pnp/sp/site-users' | 
'@pnp/sp/site-groups' | 
'@pnp/sp/webs' | 
'@pnp/sp/profiles' |
'@pnp/sp/folders' |
'@pnp/sp/files' |
'@pnp/sp/lists/web' |
'@pnp/sp/site-groups/web' |
'@pnp/sp/web';

export type ITypedHash<T> = {
    [key in keyof T]: T;
};

export type PreviousUnion<P1, P2> = { [k in (keyof P1 | keyof P2)]: k extends keyof P1 ? P1[k] : k extends keyof P2 ? P2[k] : never }
export interface IItemVersionInfo {
    "Created": string;
    "IsCurrentVersion": boolean;
    "VersionId": number;
    "VersionLabel": string;
    "Modified": string;
}

export interface IBaseItemInfo {
    "Id": number;
    "Title": string;
    "Created": string;
    "Modified": string;
}
export type IBaseItemKey = Readonly<Array<keyof IBaseItemInfo>>;

export interface IQueryOptions {
    filters?: string;
    expand?: string[];
    cache?: ICachingOptions;
    top?: number;
    orderBy?: {
        column: string;
        ascending?: boolean;
    }
    getBy?: 'Id' | 'Title'
}