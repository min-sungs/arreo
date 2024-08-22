import {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";


export interface IFileTypes {
  id: number;
  object: File;
}

interface IUseDragDropFile {
  readExcel: (file: any) => void
}

export const useDragDropFile = ({readExcel}:IUseDragDropFile) => {

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [files, setFiles] = useState<IFileTypes[]>([]);

  const fileId = useRef<number>(0);

  const dragRef = useRef<HTMLLabelElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement> | any): void => {
    let selectFiles: File[] = [];

    let tempFiles: IFileTypes[] = files;

    if (e.type === "drop") {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }

    for (const file of selectFiles) {
      tempFiles = [
        {
          id: fileId.current++,
          object: file
        }
      ];
    }
    readExcel(selectFiles[0]);
    setFiles(tempFiles);
  }, [files]);

  // ? 파일 닫기
  const handleFilterFile = useCallback(
    (e: any, id: number): void => {
      if(fileInputRef.current) {
        e.preventDefault();
        setFiles(files.filter((file: IFileTypes) => file.id !== id));
        fileInputRef.current.value = ""
      }
    },
    [files]
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);


  return {
    dragRef,
    files,
    handleFilterFile,
    onChangeFiles,
    fileInputRef,
    setFiles
  }


}