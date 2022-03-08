import type { IWeb } from '@pnp/sp/webs';
import type { IFolder } from '@pnp/sp/folders';
import type { IFile } from '@pnp/sp/files';
import type { IProfiles } from '@pnp/sp/profiles';
import type { ISiteUsers, ISiteUser, IWebEnsureUserResult } from "@pnp/sp/site-users";
export declare type AllTypes = IWeb | ISiteUsers | ISiteUser | IWebEnsureUserResult | IFolder | IFile | IProfiles;
