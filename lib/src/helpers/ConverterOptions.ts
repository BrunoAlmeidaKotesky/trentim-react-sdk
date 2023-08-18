
export class ConversionOptions {
  constructor(private blob: Blob, private byteArrays: Uint8Array[], private mimeType: string, private fileName?: string) { }
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
}