import type { ISiteUserInfo } from "@pnp/sp/site-users/types";
export interface ISPUser extends ISiteUserInfo {
    ProfilePic?: string;
    IsExternalUser: boolean;
}
