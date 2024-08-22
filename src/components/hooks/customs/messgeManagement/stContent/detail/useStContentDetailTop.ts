// import React, { ChangeEvent } from 'react';
// import { calMsglen } from '../../../../../../apis/utils/translateEncode';
// import { DatePickerProps } from 'antd';
// import { RangePickerProps } from 'antd/es/date-picker';
// import { useModal } from '../../../useModal';
//
// interface IUseStContentDetailTopProps {
//   detailInfo: any;
//   setSndMsg: React.Dispatch<React.SetStateAction<string>>;
//   setDatePicker: React.Dispatch<React.SetStateAction<string | undefined>>;
// }
//
// export const useStContentDetailTop = ({ detailInfo, setDatePicker, setSndMsg }: IUseStContentDetailTopProps) => {
//   const { warningModal } = useModal();
//
//   // ? 예약 문자 메시지 수정
//   const onChangeSndMsg = (text: ChangeEvent<HTMLTextAreaElement>) => {
//     // 작성 메시지
//     const msg = text.currentTarget.value;
//     // 작성 메시지 바이트
//     const msgLength = calMsglen(msg);
//     // 최대 바이트
//     const maxByte =
//       // eslint-disable-next-line no-nested-ternary
//       detailInfo?.msgGb === 'SMS' ? 90 : detailInfo?.msgGb === 'LMS' ? 2000 : detailInfo?.msgGb === 'MMS' ? 2000 : 0;
//
//     if (msgLength > maxByte) {
//       warningModal(
//         '메시지 수정',
//         `메시지 내용은${maxByte}바이트 이상은 전송하실수 없습니다.\r\n 쓰신 메세지는 ${
//           msgLength - maxByte
//         }바이트가 초과되었습니다.\r\n 초과된 부분은 자동으로 삭제됩니다.`,
//         true,
//       );
//     } else {
//       setSndMsg(msg);
//     }
//   };
//
//   // ant - datePicker 함수
//   // ? 예약일시 수정
//   const onChange = (
//     value: DatePickerProps['value'] | RangePickerProps['value'],
//     dateString: [string, string] | string,
//   ) => {
//     setDatePicker(dateString as string);
//   };
//
//   return {
//     onChangeSndMsg,
//     onChange,
//   };
// };
