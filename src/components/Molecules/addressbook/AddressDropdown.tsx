import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { getCheckGroupList } from '../../../apis/api/addressApis';
import { groupCheckBoxListState } from '../../../recoil/atoms/addressList';
import Loader from '../../common/Loader';
import { useGroupList } from '../../hooks/customs/addressBook/useGroupList';

/* 드롭다운 Styled */

// 드롭다운 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DropWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

// 드롭다운 버튼 스타일
const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  color: #141414;
  font-weight: 600;
  animation: ${fadeIn} 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;
// 드롭다운 목록이 될 그룹 리스트 관리 디브
const DropdownBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 0.4rem;
`;

// 그룹 하위리스트 정렬위한 디브
const GrouplistWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: row;
  color: #141414;
  font-weight: 600;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
// 하위리스트 개별 디브
const Grouplist = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
`;
// 하위리스트 이름 디브
const NameBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
`;
// 하위리스트 번호 디브
const NumberBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;
// 전송 그룹 삭제 버튼
const DeleteButton = styled.div`
  width: auto;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;
// 그룹이름, 삭제버튼 워랩
const GroupNmDelBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: start;
`;

type Group = {
  groupSeqNo: number;
  groupNm: string;
  buddyCount: number;
  buddyList: Array<{
    id: number;
    name: string;
  }>;
};

type AddressDropdownProps = {
  group: Group;
};

const AddressDropdown: React.FC<AddressDropdownProps> = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupCheckBoxList, setGroupCheckBoxList] = useRecoilState(groupCheckBoxListState); // 체크된 그룹 시퀀스넘버만 받음

  const { groupList } = useGroupList();
  const { data, isLoading, isError } = useQuery(['seqgroupsimplelist', groupCheckBoxList, groupList], () =>
    groupCheckBoxList.length === 0 ? [] : getCheckGroupList(groupCheckBoxList),
  );

  // 에러 핸들링 및 로딩 상태에 대한 처리
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  // 쿼리로 받아온 data(체크박스 통한 개별리스트)의 이름과 그룹 이름을 비교해서 같은것만 출력
  const checkSimpleList =
    data &&
    data.filter((userlist: any) => {
      return group.groupNm === userlist.buddyGroupName;
    });

  // X버튼 눌렀을때 체크풀어주는 핸들
  const handleDeleteButtonClick = () => {
    setGroupCheckBoxList((prevList) =>
      prevList.filter((seqNo) => {
        return seqNo !== group.groupSeqNo;
      }),
    );
  };

  return (
    <DropdownBtnWrapper>
      <DropdownButton type="button" onClick={() => setIsOpen(!isOpen)}>
        <GroupNmDelBtnWrap>
          {group?.groupNm} ({group?.buddyCount})
          <DeleteButton onClick={handleDeleteButtonClick}>
            <FaTimes size={14} color="gray" />
          </DeleteButton>
        </GroupNmDelBtnWrap>
        <div>
          {isOpen ? <BsChevronUp size="16px" color="#141414" /> : <BsChevronDown size="16px" color="#141414" />}
        </div>
      </DropdownButton>
      {isOpen && (
        <GrouplistWrapper>
          {checkSimpleList &&
            checkSimpleList.map((list: any) => {
              return (
                <div key={list.buddyGroupName}>
                  {list.buddyList.map((buddy: any) => (
                    <Grouplist key={buddy.buddySeqNo}>
                      <NameBox>{buddy.buddyNm}</NameBox>
                      <NumberBox>{buddy.keyCommNo}</NumberBox>
                    </Grouplist>
                  ))}
                </div>
              );
            })}
        </GrouplistWrapper>
      )}
    </DropdownBtnWrapper>
  );
};

export default AddressDropdown;
