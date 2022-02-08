import { IMimeConverter } from "../models/interfaces/IMimeConverter";
export declare class ConvertionOptions {
    private blob;
    private byteArrays;
    private mimeType;
    private mimeUtils?;
    constructor(blob: Blob, byteArrays: Uint8Array[], mimeType: string, mimeUtils?: IMimeConverter);
    /**
     * @returns Return the coneverted value as an blob Object
     */
    getBlob(): Blob;
    /**
     * @returns Return an array representation of the type `Uint8Array` from the given base64 value.
     */
    getByteAraray(): Uint8Array[];
    /**
     *  Applies only if the a file name was given, if the npm module `mime-types` or an similar module was provided on the class constructor it will return the correct detected mime, otherwhise it will return 'application/octet-stream'
     *
     * @returns The converted mime type, or null if the fileName parameter was not provided.
     */
    getMimeType(): string | null;
}
