export interface EncodeDataProps {
  code: string;
  encodeData: string;
  inputName: string;
  inputNumber: string;
  // eslint-disable-next-line no-use-before-define
  phnIds: PhnIdProps[];
}

export interface PhnIdProps {
  dealGb: string;
  phnId: string;
  regDate: string;
  rsrvdId: string;
}
