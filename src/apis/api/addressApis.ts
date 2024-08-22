import { BuddyData } from '../../components/Molecules/addressbook/types/AddressTable.types';
import { instance, instanceFile } from './clientAxios';

export const postDeleteAddressList = async (deleteAddressList: string[]) => {
  try {
    const response = await instance.post('contacts/deleteBuddy', {
      data: {
        buddySeqNo: JSON.stringify(deleteAddressList),
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAddressGroupList = async (): Promise<{ data: any }> => {
  try {
    const response = await instance.get('groupList2');
    return { data: response.data }; // 반환 형식을 명시적으로 지정
  } catch (error) {
    return { data: [error] }; // 에러 발생 시 빈 배열을 반환
  }
};

export const postDeleteGroupList = async (data: string[]) => {
  try {
    const response = await instance.post('group/delete', {
      groupSeqNo: data,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

/** api 출력확인 */
// 페이지네이션의 자료
export const getUserAddressInfo = async (currentPage: any) => {
  const response = await instance.get('buddyList', {
    params: {
      pageNumber: { currentPage },
      pageSize: 20,
    },
  });
  return response.data;
};

export const getCallerNumberList = async () => {
  const response = await instance.get('/message/getCallbackList');
  try {
    return response.data;
  } catch (error) {
    return error;
  }
};

// 페이지네이션 처리된, 메인페이지 그룹시퀀스넘버 해당 리스트
// export const getSelecGroupList = async (currentPage: any, groupSeqNo: any) => {
//   const response = await instance.get('groupBuddyList', {
//     params: {
//       pageNumber: { currentPage },
//       pageSize: 10,
//       groupSeqNo,
//     },
//   });
//   if (response.status !== 200) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.data;
// };

// 체크한 그룹의 시퀀스넘버, 해당 그룹에 속한 유저 수
export const getUserAddressGroupList = async () => {
  const response = await instance.get('groupList2');

  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }

  return response.data;
};

// 체크한 그룹에 속한 유저 이름, 번호 list
export const getCheckGroupList = async (groupSeqNo: any) => {
  const queryString = groupSeqNo.join(',');
  const response = await instance.get(`/groupSimpleList?groupSeqNo=${queryString}`);
  return response.data;
};

/** 그룹 추가하기
 * post방식
        type : post ,
        endpoint : /group/create,
        header : {
          "Authorization" : "Bearer " + 토큰명
        }
        body : {
          "groupNm" : 그룹이름
        }
 */
export const postAddGroup = async (post: any) => {
  const response = await instance.post(`/group/create`, {
    groupNm: post.groupNm,
  });
  return response.data;
};

/** 그룹 삭제하기
 * type : post ,
      endpoint : /group/delete,
      header : {
       "Authorization" : "Bearer " + 토큰명
      }
      body : {
       "groupSeqNos" : [ 그룹시퀀스번호1, 그룹시퀀스번호2 ... ]
      }
 */
export const deleteDelGroups = async (groupCheckBoxList: string[]) => {
  const response = await instance.post(`/group/delete`, {
    groupSeqNos: groupCheckBoxList,
  });
  return response.data;
};

/** 그룹 수정하기
 * type : post ,
      endpoint : /group/update,

      header : {
        "Authorization" : "Bearer " + 토큰명
      }
      body : {
        "groupSeqNo" : 그룹시퀀스번호
        "groupNm" : 새그룹이름
      }

      return : Http 200 {
        "groupNm" : 요청한 새 그룹 이름,
        "groupSeqNo" : 같은그룹시퀀스번호
      }
*/
export const patchEditGroups = async (groupEditValues: { groupSeqNo: string; groupNm: string }[]) => {
  const transformData = groupEditValues.map((item) => ({
    groupSeqNo: item.groupSeqNo,
    groupNm: item.groupNm,
  }));

  const response = await instance.post('/group/update', transformData);
  return response.data;
};

// 메인테이블 페이지네이션에 띄울 리스트 - TOTAL && GroupNm && 휴지통 클릭 or 검색시 GET

export interface IGetMaintableListProps {
  currentPage: number;
  groupSeqNo?: string | number | null;
  keywordValue?: string;
  keyword?: string;
}

export const getMaintableList = async ({ currentPage, groupSeqNo, keywordValue, keyword }: IGetMaintableListProps) => {
  const response = await instance.get('groupBuddyList', {
    params: {
      groupSeqNo,
      pageNumber: currentPage,
      pageSize: 30,
      keywordValue,
      keyword,
    },
  });
  return response.data;
};

/** 개별리스트 추가하기
 * type : post ,
    endpoint : /contacts/create

      header : {
        "Content-Type : application/json",
        "Authorization" : "Bearer" + 토큰명
      }

      "contactRequestDTO" : {
        "name" : "최지혁", // 필수
        "phnNum" : 01089555549 // 필수
        "groupSeqNo" : 1, // 선택
        "email" : "jiheok@naver.com" // 선택
      }

      return : Http 200
      {
        "message" : "주소록 추가 완료"
      }
 */
export const postAddItem = async (newItem: any) => {
  const response = await instance.post(`/contacts/create`, {
    name: newItem.name,
    phnNum: newItem.phnNum,
    groupSeqNo: newItem.groupSeqNo,
    email: newItem.email,
  });
  return response.data;
};

/** 개별리스트 수정하기
 * type : post ,
    endpoint : /contacts/update

    header : {
      "Content-Type : application/json",
      "Authorization" : "Bearer" + 토큰명
    }

    "contactRequestDTO" : {
      "name" : "최지혁",
      "phnNum" : 01089555549,
      "groupSeqNo" : 1,
      "email" : "jiheok@naver.com",
    }

    return : Http 200
    {
      "message" : "주소록 수정 완료",
      "contact" : {
        "name" : "최지혁",
        "phnNum" : "01089555549",
        "groupSeqNo" : 1,
        "email" : jiheok@naver.com
      }
    }
 */
export const patchEditItems = async (
  itemEditValues: { name: string; phnNum: string; groupSeqNo?: number | null; email?: string; buddySeqNo: number }[],
) => {
  const response = await instance.post('/contacts/update', JSON.stringify(itemEditValues));
  return response.data;
};

/** 개별리스트 삭제하기
 * type : Delete ,
  endpoint : /contacts/delete/{contactId}

    header : {

      "Authorization" : "Bearer" + 토큰명
    }

    return : Http 200
    {
      "주소록이 삭제되었습니다. {contactId}"
    }
*/
export const deleteRemoveItems = async (buddySeqNoArray: number[] | undefined) => {
  const response = await instance.post('/contacts/delete', buddySeqNoArray);
  return response.data;
};

// 연락처 상세페이지 수정하기
export const patchEditDetail = async (editedValues: BuddyData) => {
  const response = await instance.post('/contacts/updateDetail', editedValues);
  return response.data;
};

/** 휴지통 관련 api
 * 1. 리스트 불러오기 get
 * 2. 리스트 복원하기 post
 * 3. 리스트 삭제하기 post
 * 4. 리스트 전체 복원하기 post
 * 5. 리스트 전체 삭제하기 delete
 */

// 1 - 휴지통 get
export interface IGetBinListProps {
  currentPage: number;
  buddyNm?: string | undefined;
  emailId?: string | undefined;
  keyCommNo?: string | undefined;
  coNm?: string | undefined;
  keywordValue?: string | undefined;
  keyword?: string | undefined;
}

export const getUserAddressRecycleBinList = async ({
  currentPage,
  buddyNm,
  emailId,
  keyCommNo,
  coNm,
  keywordValue,
  keyword,
}: IGetBinListProps) => {
  const response = await instance.get('/contacts/recycle', {
    params: {
      pageNumber: currentPage,
      pageSize: 20,
      buddyNm,
      emailId,
      keyCommNo,
      coNm,
      keywordValue,
      keyword,
    },
  });
  return response.data;
};

// 2 - 휴지통 restore
export const postAdressBinRestore = async (buddySeqNo: number[]) => {
  const response = await instance.post('/contacts/recycle/restore', buddySeqNo);
  return response.data;
};
// 3 - 휴지통 delete
export const postAdressBinDelete = async (buddySeqNo: number[]) => {
  const response = await instance.post('/contacts/recycle/delete', buddySeqNo);
  return response.data;
};

// 4 - 휴지통 전체 restore
export const postAdressBinAllList = async () => {
  const response = await instance.post('/contacts/recycle/restore/all');
  return response.data;
};

// 5 - 휴지통 전체 delete
export const deleteAddressBinAllList = async () => {
  const response = await instance.delete('/contacts/recycle/delete');
  return response.data;
};

// 주소록 메인테이블 list 정렬 api
export const sortAdressList = async (sortMneu: string) => {
  const response = await instance.post('/toggleSortDirection', {
    column: sortMneu,
  });
  return response.data;
};

// 주소록 중복체크 버튼 클릭시 get api
interface DupData {
  currentPage: number;
}
export const getDuplicationList = async ({ currentPage }: DupData) => {
  const response = await instance.get('/contacts/duplicate', {
    params: {
      pageNumber: currentPage,
      pageSize: 10,
    },
  });
  return response.data;
};

// 주소록 대량추가 주소록 저장 버튼 클릭시 post api

export interface DefaultRowData {
  [key: string]: string | number | null; // 인덱스 시그니처 변경
  buddyNm: string; // 이름
  // groupNm: string; // 그룹이름
  keyCommNo: string; // 휴대폰번호
  emailId: string; // 이메일
  groupSeqNo: number | null; // 그룹고유번호
  // siteId: string | null; // 서비스이용 사이트 이름(아레오, 네티앙)
  // usrId: string; // ?
  // usrKey: string; // ?
  birthday: string | null; // 생일
  coNm: string | null; // 회사이름
  genderFlag: string | null; // 성별
  homeAddr: string | null; // 집주소
  homeNumber: string; // 집전화
  homeZipCd: string; // 집우편번호
  coNumber: string; // 회사전화
  coZipCd: string; // 회사우편번호
  coAddr: string | null; // 회사주소
  faxNumber: string; // 팩스
  homepageUrl: string | null; // 홈페이지
  accountNo: string; // 계좌번호
  marriageDay: string | null; // 결혼기념일
  messenger: string | null; // 메신저
  coDept: string | null; // 부서
  coHandle: string | null; // 직함
  etcInfo: string | null; // 메모
  // natCd: string | null; // 국가번호
  residentNo: string; // 주민번호
  number015: string; // 015번호
}

export const postAddLargeList = async (addData: DefaultRowData[]) => {
  const response = await instance.post('/contacts/large-buddy', addData);
  return response.data;
};

/** 메세지 전송하기
 * POST /message/legacy/send`

{
"callback" : {{callback}}, // 등록된 발신번호 중 하나
"itemGb" : {{itemGb}}, // SMS 즉시전송 : 1 예약전송 : 01 LMS/MMS 즉시전송 : M0, 예약전송 : M2
"msgGb" : {{msgGb}}, // 'A' : SMS, 'E' : LMS, 'F' : MMS
"smsFg" : {{smsFg}}, // 무조건 A 넣어주세요
"usrCd" : {{usrCd}}, // 무조건 00000
"grpCd" : {{grpCd}}, // 공란
"sndMsg" : {{sndMsg}}, //전송하고자 하는 메시지
"subject" : {{subject}}, // LMS, MMS 경우 제목
"sndDttm" : {{sndDttm}} // 공란 또는 과거시점이면 즉시발송, 미래시점의 경우 예약발송 ex 2023년 11월 08일 11시 11분 11초 '20231108111111'
"groupSeqList" : {{groupSeqList}}, // 그룹 PK 리스트, 배열
"buddySeqList" : {{buddySeqList}}, // 주소록 PK 리스트, 배열
"etcPhoneNumberList" : {{etcPhoneNumberList}}, //주소록에 없고 즉석에서 추가한 전화번호 리스트
"macroFlag" : "N",
"rsrvdGb" : {{rsrvdGb}} 예약 여부 : 'Y' 예약됨 / 'N' 예약안됨
"fileName" : "8117_021813.jpg", [MMS] 이미지 파일명 <------ 이미지 첨부 API 하고 돌려받은 파일명
}
*/
interface XmsSendDto {
  buddySeqList: any[];
  callback: string;
  etcPhoneNumberList: string[];
  fileName: string;
  groupSeqList: any[];
  msgType: string;
  sndDttm: string;
  sndMsg: string;
  subject?: string; // 옵셔널 프로퍼티
  usrCd: string;
}

// 파일 객체에 대한 인터페이스
interface FileObject {
  file: File;
  thumbnail: string;
  type: string;
}

interface SendDto {
  file: FileObject;
  dto: XmsSendDto;
}

export const postMessageSend = async (data: SendDto) => {
  const formData = new FormData();
  const json = JSON.stringify(data.dto);
  const blob = new Blob([json], { type: 'application/json' });
  formData.append('file', data?.file?.file);
  formData.append('dto', blob);

  const response = await instanceFile.post(`${process.env.REACT_APP_SERVER_URL}/message/legacy/send`, formData);

  return response.data;
};
