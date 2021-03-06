/**This interface can be injected if using the library mime-types */
export interface IMimeConverter {
    /**A function which receives a file name with extention and return it's mime-type or false if none mime is found */
    contentType(filenameOrExt: string): string | false;
    /**A function which receives a file name with extention and return it's mime-type or false if none mime is found */
    contentType(filenameOrExt: string): string;
}