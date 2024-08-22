import React, {useEffect} from 'react';
import * as S from './AddressBook.styles';
import SoftPhone from '../../components/softPhone/SoftPhone.tsx';
import AddressLeftZone from "./components/AddressLeftZone/AddressLeftZone.tsx";
import SendResult from "../publishMessagePage/sendresult/SendResult.tsx";
import {useRecoilState, useSetRecoilState} from "recoil";
import { softPhoneTopTap} from "../../recoil/atoms/common/commonRecoil.ts";
import {addressOpenToggleRecoil} from "../../recoil/atoms/messageSend/messageSend.ts";


interface IAddressBook {
  gridRef: React.MutableRefObject<any>
  tap: string
}

//  ! 괴물 주의
const AddressBook = ({gridRef,tap}: IAddressBook) => {
  const [softPhoneTopTapState,setSoftPhoneTopTapState] = useRecoilState(softPhoneTopTap);
  const [addressOpenToggleState,setAddressOpenToggleState]= useRecoilState(addressOpenToggleRecoil);
  useEffect(() => {
    setSoftPhoneTopTapState(tap);
  }, [tap]);

  return (
    <S.Container>
      <S.ContainerX>
        <S.IsLogin>
          <S.AddressTableWrap>
            <AddressLeftZone gridRef={gridRef} softPhoneTopTapState={softPhoneTopTapState} addressOpenToggleState={addressOpenToggleState}/>
            <SendResult softPhoneTopTapState={softPhoneTopTapState} addressOpenToggleState={addressOpenToggleState}/>
            <SoftPhone gridRef={gridRef}/>
          </S.AddressTableWrap>
        </S.IsLogin>
      </S.ContainerX>
    </S.Container>
  );
};

export default AddressBook;
