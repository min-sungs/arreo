import React from 'react';
import * as S from "./ExcelMessenger.styles.ts"
import ATitle from "../../Atom/ATitle.tsx";
import ExcelMessengerBodyIndex from "./body/ExcelMessengerBody.index.tsx";


const  ExcelMessengerIndex= () => {

  return (
    <S.Content>
      <S.ContentTitle>
        <ATitle type="sub" text={"엑셀 메신저"} color="#0D42E5"/>
      </S.ContentTitle>
      <ExcelMessengerBodyIndex/>
    </S.Content>
  );
}

export default ExcelMessengerIndex

