/* eslint-disable */
import {WaveFile} from "wavefile";

export const convertFileToBase64 = (file:any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = (event:any) => {
      const arrayBuffer = event.target.result;
      const base64str =  btoa(arrayBuffer);
      resolve(base64str);
    }
    reader.onerror = (error) => {
      reject(error);
    }
  });
}
export const convertBlobToBase64 = (blob:any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = () => {
      const base64str = reader.result;
      resolve(base64str);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const convertBase64ToWavFile = (base64Str:string, fileName:any) =>{
  let wav = new WaveFile();
  wav.fromBase64(base64Str as string);
  wav.toSampleRate(8000);
  wav.toBitDepth("16");
  let wavDataUri = wav.toDataURI();
  return wavDataToFile(wavDataUri, fileName);
}

export const convertWavToAsteriskWavFile = (file:any, fileName:any) => {
  return convertFileToBase64(file).then((base64Str:any)=>{
    return convertBase64ToWavFile(base64Str, fileName)
  })
}

export const wavDataToFile = (data:any, fileName:any) =>{
  const arr = data.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {type:mime});
}
