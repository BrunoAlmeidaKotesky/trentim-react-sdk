import { ConvertionOptions } from "./ConverterOptions";
import type { IBlobStringWritter, IFileInfo } from "../models/interfaces/IFileInfo";
import type { IMimeConverter } from "../models/interfaces/IMimeConverter";
export declare class FileUtils {
    mime?: IMimeConverter;
    constructor(mime?: IMimeConverter);
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
    urlToFile(url: string, fileInfo: IFileInfo, fetchOptions?: RequestInit): Promise<File>;
    /**
     * Downloads in the browser an XML File of the same given string.
     *
     * @param xmlText  - String of the whole content of the XML file
     * @param {String=} fileName - the name of the XML file.
     */
    downloadXml(xmlText: string, fileName?: string): void;
    private fileNameValidator;
    /**
     * Takes any `Blob` object or inherited objects from this interface and convert it to a base64 string.
     * @param blob - Any Blob object, such as `File` and other inherited objects from this interface.
     * @returns A promise of the base64 string.
     */
    static blobToBase64: (blob: Blob, config?: IBlobStringWritter) => Promise<string>;
    private checkIfHasMime;
    converBase64To(base64: string, fileName?: string, type?: string): ConvertionOptions;
}
