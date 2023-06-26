import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

type FileChangeEv = (files: File[]) => void;
type OnUploadFunc = (fileChangeCb: FileChangeEv, accepts?: string[]) => void;

export const useFileUpload = <RefElement extends HTMLElement = HTMLButtonElement>() => {
  const elementRef = useRef<RefElement>(null);
  const [isDroppingFile, setIsDroppingFile] = useState(false);

  const createInputComponent = useCallback(({ multiple, accept }: { multiple: boolean, accept: string }) => {
    const el = document.createElement('input')
    el.type = 'file'
    el.accept = accept
    el.style.display = 'none'
    el.multiple = multiple
    return el
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>, fileChangeCb: FileChangeEv) => {
    const fileUploaded = Array.from(event?.target?.files);
    fileChangeCb(fileUploaded);
    event.target.value = null;
    event.target.remove();
  };

  const onUpload: OnUploadFunc = useCallback((fileChangeCb, accepts = ['*']) => {
    const inputEL = createInputComponent({ multiple: true, accept: accepts?.join(',') });
    inputEL.addEventListener('change', (e) => onChange(e as unknown as ChangeEvent<HTMLInputElement>, fileChangeCb));
    inputEL.click()
  }, []);

  const onDocumentDragOver = (e: DragEvent) => e.preventDefault();
  const onDropFile = (_e: any) => (cb: FileChangeEv) => {
    if (elementRef.current) {
      setIsDroppingFile(true);
      elementRef.current.addEventListener('dragover', e => e.preventDefault());
      elementRef.current?.addEventListener('drop', (event) => {
        event.preventDefault();
        const fileUploaded = Array.from(event.dataTransfer.files);
        cb(fileUploaded);
        setIsDroppingFile(false);
      });
    }
    setIsDroppingFile(false);
  }

  useEffect(() => {
     document.addEventListener('dragover', onDocumentDragOver);
     document.addEventListener('drop', onDropFile);
    
    return () => {
      document.removeEventListener("dragover", onDocumentDragOver);
      document.removeEventListener("drop", onDropFile);
    };
  }, [elementRef]);

  return { onUpload, elementRef, onDropFile: onDropFile(null), isDroppingFile };
}