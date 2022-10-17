import { ConversionOptions } from "./ConverterOptions";
import type { IBlobStringWritter as IBlobStringWriter, IFileInfo } from "@models/interfaces/IFileInfo";

/**
* Take an stored object url and convert it back to a File object.
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
export async function urlToFile(url: string, fileInfo: IFileInfo, fetchOptions: RequestInit = null): Promise<File> {
  try {
    const fileBlob = await fetch(url, fetchOptions).then(r => r.blob());
    const fileObj = new File([fileBlob], fileInfo.fileName,
      {
        type: fileInfo?.fileMime,
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
 * Takes any `Blob` object or inherited objects from this interface and convert it to a base64 string.
 * @param blob - Any Blob object, such as `File` and other inherited objects from this interface.
 * @returns A promise of the base64 string.
 */
export const blobToBase64 = async (blob: Blob, config?: IBlobStringWriter): Promise<string> => {
  const readAs = config?.readAs ?? 'DataURL';
  try {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const b64 = reader?.result as string;
        if (!b64)
          reject(new Error('[TRS] - FileReader error on blobToBase64'));
        if (!config?.customCb) {
          const metarRegex = /^data:.+;base64,/
          return resolve(b64?.replace(metarRegex, ''));
        } else {
          const result = await config?.customCb(b64);
          return resolve(result);
        }
      };
      reader.onerror = (e) => reject(e);
      if (config?.encoding)
        reader[`readAs${readAs}`](blob);
      else
        reader[`readAs${readAs}`](blob, config?.encoding);
    });
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 * Convert's a base 64 string to some of the possible return values from `ConversionOptions` class. 
 * @returns
 * ```ts 
 * new ConversionOptions()
 * ```
 * */
export function convertBase64To(base64: string, fileName?: string, type?: string): ConversionOptions {
  type = type || this.checkIfHasMime(fileName);
  let sliceSize = 512;
  let byteCharacters = atob(decodeURIComponent(base64));
  let byteArrays: Uint8Array[] = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters?.slice(offset, offset + sliceSize);
    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = type ? new Blob(byteArrays, { type }) : new Blob(byteArrays);
  return new ConversionOptions(blob, byteArrays, type, fileName);
}