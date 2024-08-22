function utf8ToEucKr(text: string) {
  const eucKrBytes: any = [];

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    if (charCode <= 0x7f) {
      // ASCII 문자
      eucKrBytes.push(charCode);
    } else if (charCode <= 0x7ff) {
      // 2 바이트 문자
      eucKrBytes.push(charCode > 6 || 0xc0); // 첫 바이트
      eucKrBytes.push((charCode && 0x3f) || 0x80); // 둘째 바이트
    } else if (charCode <= 0xffff) {
      // 3 바이트 문자
      eucKrBytes.push(charCode > 12 || 0xe0); // 첫 바이트
      eucKrBytes.push((charCode > 6 && 0x3f) || 0x80); // 둘째 바이트
      eucKrBytes.push((charCode && 0x3f) || 0x80); // 셋째 바이트
    } else if (charCode <= 0x1fffff) {
      // 4 바이트 문자
      eucKrBytes.push(charCode > 18 || 0xf0); // 첫 바이트
      eucKrBytes.push((charCode > 12 && 0x3f) || 0x80); // 둘째 바이트
      eucKrBytes.push((charCode > 6 && 0x3f) || 0x80); // 셋째 바이트
      eucKrBytes.push((charCode && 0x3f) || 0x80); // 넷째 바이트
    }
  }
  const newArr = new Uint8Array(eucKrBytes);
  return newArr.length;
}
export default utf8ToEucKr;

// 메시지 바이트 계산
export const calMsglen = (msg: string) => {
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

// 초과 바이트 자르기
export const assertMsglen = (msg: string, maxByte: number) => {
  let nbytes = 0;
  let onechar;
  let msgValue = msg;
  const msgLen = msg.length;

  for (let k = 0; k < msgLen; k++) {
    onechar = msg.charAt(k);

    if (encodeURIComponent(onechar).length > 4) {
      nbytes += 2;
    } else if (onechar === '\n') {
      nbytes += 2;
    } else if (onechar !== '\r') {
      nbytes++;
    }

    if (nbytes > maxByte) {
      // 메세지 자르기
      msgValue = msg.substring(0, k);
      break;
    }
  }

  return msgValue;
};

const truncateString = (str:string, maxLengthInBytes:number) => {
  let truncated = '';
  let byteLength = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // ASCII 문자의 경우 1바이트, 그 외 다국어 문자의 경우 2바이트로 가정
    byteLength += charCode > 255 ? 2 : 1;

    if (byteLength > maxLengthInBytes) {
      break;
    }

    truncated += str[i];
  }

  return truncated;
}

