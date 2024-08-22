export const calMsgByte = (msg: string) => {
  let bytes = 0;

  for (let i = 0; i < msg.length; i++) {
    const ch = msg.charAt(i);

    if (encodeURIComponent(ch).length > 4) {
      bytes += 2;
    } else if (ch === '\n') {
      bytes += 2;
    } else if (ch !== '\r') {
      bytes++;
    }
  }
  return bytes;
};
