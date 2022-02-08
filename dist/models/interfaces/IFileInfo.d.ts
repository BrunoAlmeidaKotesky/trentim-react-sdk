export interface IFileInfo {
    /**Name of the file to be converted to `File` */
    fileName: string;
    /**The Mime-Type of the file, example: `text/plain` */
    fileMime?: string;
    /**The last modfified date of the file before being converted */
    lastModified?: number;
}
