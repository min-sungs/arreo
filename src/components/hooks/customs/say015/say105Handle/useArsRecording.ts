import {NextItem} from "../say015ARS/use015ARS.ts";

interface IUseArsRecording {
  node: any;
  nodeChild: NextItem
  updatedJsonFile(): void
}
export const useArsRecording = ({nodeChild,node,updatedJsonFile}:IUseArsRecording) => {

  /* 015 ARS 음성녹음 받기 수정 Hook */
  const handleArsSms = () => {
    node.s015Data.action = "음성녹음 받기";
    node.s015Data.type = "VMS";
    node.target.type = "VMS";
    node.target.level = "";
    if(nodeChild.target.type === "BLANK") {
      nodeChild.target.type = "BLANK_ADD"
      nodeChild.source.userinput = "none"
    }
    updatedJsonFile();
  }

  return {
    handleArsSms
  }
}