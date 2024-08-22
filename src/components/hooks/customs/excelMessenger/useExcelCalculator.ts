import {useState} from "react";

export const useExcelCalculator = () => {
  const [sndMsg, setSndMsg] = useState<string>('');
  const calMsglen = (msg: string) => {
    let nbytes = 0;

    for (let i = 0; i < msg.length; i++) {
      const ch = msg.charAt(i);

      if (encodeURIComponent(ch).length > 4) {
        nbytes += 2;
      } else if (ch === '\n') {
        nbytes += 2;
      } else if (ch !== '\r') {
        nbytes++;
      }
    }
    return nbytes;
  };

  return {
    sndMsg,
    setSndMsg,
    calMsglen
  }
}