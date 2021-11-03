import { ConvertionOptions } from "../models/ConverterOptions";
import { IFileInfo } from "../models/interfaces/IFileInfo";
import { IMimeConverter } from "../models/interfaces/IMimeConverter";

export class FileUtils {

  constructor(public mime?: IMimeConverter) { }
  /**
  * Take an object Url, or an url of an image an convert it back to a File object.
  * 
  * @param url - The first input number
  * @param fileInfo - The second input number
  * @param {RequestInit=} fetchOptions - An optional fetching options about the url request, it uses the same `{RequestInit}` interface from fetch api.
  * @returns A promise containing the file
  * 
  *@example
  *```ts
  * const newFile = await urlToFile("blob:https://tenant.com/bd3df1f7-38c5-44db-9a97-aa956072ef02", {
  *   fileName: "bird.png",
  *   fileMime: "image/png",
  *   lastModified: new Date().getTime()
  * });
  * ```
  * */
  public async urlToFile(url: string, fileInfo: IFileInfo, fetchOptions: RequestInit = null): Promise<File> {
    try {
      const fileBlob = await fetch(url, fetchOptions).then(r => r.blob());
      const fileObj = new File([fileBlob], fileInfo.fileName,
        {
          type: fileInfo?.fileMime || this.checkIfHasMime(fileInfo?.fileName),
          lastModified: fileInfo?.lastModified || new Date().getTime()
        });
      return fileObj;
    }
    catch (e) {
      console.error(e?.message);
      return null;
    }
  }
  /**
   * Downloads in the browser an XML File of the same given string.
   * 
   * @param xmlText  - String of the whole content of the XML file
   * @param {String=} fileName - the name of the XML file. 
   */
  public downloadXml(xmlText: string, fileName?: string): void {
    if (xmlText) {
      let xmlTag = document.createElement('a');
      let filename = fileName || 'undefinedName.xml';
      filename = this.fileNameValidator(filename, '.xml');
      let xmlBlob = new Blob([xmlText], { type: 'application/octet-stream' });
      let objUrl = URL.createObjectURL(xmlBlob);

      xmlTag.setAttribute('href', objUrl);
      xmlTag.setAttribute('download', filename);

      xmlTag.dataset.downloadurl = ['text/plain', xmlTag.download, xmlTag.href].join(':');
      xmlTag.draggable = true;
      xmlTag.classList.add('dragout');
      xmlTag.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(objUrl);
        xmlTag?.remove();
      }, 200);
    }
  }

  private fileNameValidator(fileName: string, ext: string) {
    if (!ext.startsWith('.'))
      ext = "." + ext;
    if (fileName) {
      if (!fileName.endsWith(ext))
        return fileName + ext;
      return fileName;
    }
  }

  /**
   * Takes any `Blob` object or inherited objects from this interface and convert it to a base64 string.
   * @param blob - Any Blob object, such as `File` and other inherited objects from this interface.
   * @returns A promise of the base64 string.
   */
  public blobToBase64 = (blob: Blob): Promise<string> => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        const b64 = reader.result as string;
        const metarRegex = /^data:.+;base64,/
        resolve(b64.replace(metarRegex, ''));
      };
    });
  };

  private checkIfHasMime(fileName?: string): string | null {
    if (!fileName)
      return null;
    let type = this?.mime?.contentType(fileName) || 'application/octet-stream';
    return type;
  }

  public converBase64To(base64: string, fileName?: string): ConvertionOptions {
    let type = this.checkIfHasMime(fileName);
    let sliceSize = 512;
    let byteCharacters = atob(base64); //method which converts base64 to binary
    let byteArrays: Uint8Array[] = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = type ? new Blob(byteArrays, { type }) : new Blob(byteArrays);
    return new ConvertionOptions(blob, byteArrays, type, this?.mime ?? undefined);
  }
}