import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import React, { Suspense, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { postDeleteAddressList } from '../../../apis/api/addressApis';
import { LoadingComponent } from '../../../apis/utils/LoadingComponent';
import { deleteAddressListState } from '../../../recoil/atoms/addressList';
import BaseButton from '../../Atom/BaseButton';
import AddressSearch from './AddressSearch';
import AddressTable from './AddressTable';

interface Person {
  select: string;
  group: string;
  name: string;
  phoneNumber: string;
  email: string;
}

const Container = styled.div`
  width: 55%;
  height: calc(100vh - 20rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 750px) {
    height: calc(100vh - 12rem);
  }
`;

const Block = styled.div`
  background-color: #fff;
  width: 100%;
  height: 92%;
  border-radius: 1rem;
  box-shadow: 7px 7px 16px -11px rgba(0, 0, 0, 0.75);
`;

const Inner = styled.div`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  padding: 2rem;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const StyledButtons = styled.button`
//   border: 1px solid #e9ecef;
//   outline: 0;
//   cursor: pointer;
//   /* background-color: #f1f3f5; */
//   background-color: #fff;
//   border-radius: 0.8rem;
//   /* box-shadow: -3px -3px 8px #fff, 3px 3px 8px #babecc; */
//   box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3),
//     0 1px 2px rgba(0, 0, 0, 0.4);
//   text-shadow: 1px 1px 20px #babecc;
//   font-weight: 500;
//   font-size: 1.4rem;
//   transition: all 0.2s ease-in-out;
//   width: max-content;
//   margin-left: 1rem;
//   @media screen and (max-width: 1500px) {
//     transform: scale(0.8);

//     & + & {
//       margin: 0.1rem;
//     }
//   }
//   & + & {
//     margin-left: 1rem;
//   }

//   &:hover {
//     /* box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc; */
//   }

//   &:active {
//     box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
//   }
//   &:disabled {
//     background-color: #ccc;
//   }
// `;

const Strong = styled.strong`
  font-size: 1.8rem;
  font-weight: 400;
  min-width: max-content;
  margin-right: 1.4rem;

  @media screen and (max-width: 1500px) {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const Table = styled.div`
  width: 100%;
  height: 86%;
  margin-top: 2rem;
`;

const MainTable = () => {
  const deleteAddressList = useRecoilValue<string[]>(deleteAddressListState);
  const { mutate } = useMutation(() => postDeleteAddressList(deleteAddressList), {});

  const addressListDelete = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <Container>
      <Block>
        <Inner>
          <Suspense fallback={<LoadingComponent />}>
            <Top>
              <Buttons>
                <Strong>주소록 관리 : </Strong>
                <BaseButton>추가</BaseButton>
                <BaseButton color="#1175f7">수정</BaseButton>
                <BaseButton color="#d32f2f" onClick={addressListDelete}>
                  삭제
                </BaseButton>
              </Buttons>
              <AddressSearch />
            </Top>
            <AddressTable />
          </Suspense>
        </Inner>
      </Block>
    </Container>
  );
};

export default MainTable;
