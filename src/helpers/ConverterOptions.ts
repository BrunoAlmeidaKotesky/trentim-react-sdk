import type { IMimeConverter } from "@models/interfaces/IMimeConverter";

export class ConversionOptions {
  constructor(private blob: Blob, private byteArrays: Uint8Array[], private mimeType: string, private mimeUtils?: IMimeConverter, private fileName?: string) { }
  /**
   * @returns Return the converted value as an blob Object
   */
  public getBlob(): Blob {
    return this.blob;
  }

  public getFile(): File {
    return new File([this.getBlob()], this?.fileName, { type: this?.mimeType });
  }
  /**
   * @returns Return an array representation of the type `Uint8Array` from the given base64 value.
   */
  public getByteArray(): Uint8Array[] {
    return this.byteArrays;
  }
  /**
   *  Applies only if the a file name was given, if the npm module `mime-types` or an similar module was provided on the class constructor it will return the correct detected mime, otherwise it will return 'application/octet-stream' 
   *   
   * @returns The converted mime type, or null if the fileName parameter was not provided.
   */
  public getMimeType(): string | null {
    return this.mimeUtils.contentType(this.mimeType) || this.mimeType;
  }
}