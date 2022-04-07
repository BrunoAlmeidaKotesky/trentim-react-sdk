import type { IMimeConverter } from "../models/interfaces/IMimeConverter";
export declare class ConversionOptions {
    private blob;
    private byteArrays;
    private mimeType;
    private mimeUtils?;
    private fileName?;
    constructor(blob: Blob, byteArrays: Uint8Array[], mimeType: string, mimeUtils?: IMimeConverter, fileName?: string);
    /**
     * @returns Return the converted value as an blob Object
     */
    getBlob(): Blob;
    getFile(): File;
    /**
     * @returns Return an array representation of the type `Uint8Array` from the given base64 value.
     */
    getByteArray(): Uint8Array[];
    /**
     *  Applies only if the a file name was given, if the npm module `mime-types` or an similar module was provided on the class constructor it will return the correct detected mime, otherwise it will return 'application/octet-stream'
     *
     * @returns The converted mime type, or null if the fileName parameter was not provided.
     */
    getMimeType(): string | null;
}
