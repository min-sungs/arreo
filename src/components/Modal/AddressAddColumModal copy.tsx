import { Form, Modal } from 'antd';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

interface itemsByGroupProps {
  head: string;
  children: {
    id: string;
    value: string;
    label: string;
  }[];
}

const InfoWrap = styled.div`
  padding-bottom: 30px;
`;

// 항목 styled
const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  margin-top: 20px;
`;

const DivWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  row-gap: 5px;
`;

const InputWrap = styled.div`
  display: flex;
  width: 110px;
  align-items: center;
  gap: 5px;
`;

const AddressAddColumModal = ({ setIsModalOpen, isModalOpen, selectedItems, setSelectedItems }: any) => {
  const [localSelectedItems, setLocalSelectedItems] = useState(new Set(selectedItems));

  const itemsByGroup: itemsByGroupProps[] = useMemo(
    () => [
      {
        head: '기본정보',
        children: [
          { id: 'buddyNm', value: '이름', label: '이름' },
          { id: 'keyCommNo', value: '휴대폰번호', label: '휴대폰번호' },
          { id: 'number015', value: '015번호', label: '015번호' },
          { id: 'emailId', value: '이메일', label: '이메일' },
        ],
      },

      {
        head: '직장',
        children: [
          { id: 'coNm', value: '회사이름', label: '회사이름' },
          { id: 'coDept', value: '부서', label: '부서' },
          { id: 'coHandle', value: '직함', label: '직함' },
          { id: 'coNumber', value: '회사전화', label: '회사전화' },
          { id: 'faxNumber', value: '팩스', label: '팩스' },
          { id: 'coZipCd', value: '회사우편번호', label: '회사우편번호' },
          { id: 'coAddr', value: '회사주소', label: '회사주소' },
        ],
      },

      {
        head: '집',
        children: [
          { id: 'homeNumber', value: '집전화', label: '집전화' },
          { id: 'homeZipCd', value: '집우편번호', label: '집우편번호' },
          { id: 'homeAddr', value: '집주소', label: '집주소' },
        ],
      },

      {
        head: '상세정보',
        children: [
          { id: 'homepageUrl', value: '홈페이지', label: '홈페이지' },
          { id: 'messenger', value: '메신저', label: '메신저' },
          { id: 'birthday', value: '생일', label: '생일' },
          { id: 'marriageDay', value: '결혼기념일', label: '결혼기념일' },
          { id: 'genderFlag', value: '성별', label: '성별' },
          { id: 'etcInfo', value: '메모', label: '메모' },
          { id: 'residentNo', value: '주민번호', label: '주민번호' },
          { id: 'accountNo', value: '계좌번호', label: '계좌번호' },
        ],
      },
    ],
    [],
  );

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemValue: string = e.target.value;

    // 로컬 state만 변경
    const newLocalSelectedItems = new Set(localSelectedItems);

    if (newLocalSelectedItems.has(itemValue)) {
      newLocalSelectedItems.delete(itemValue);
    } else {
      newLocalSelectedItems.add(itemValue);
    }

    // 컴포넌트의 state에도 적용
    setLocalSelectedItems(newLocalSelectedItems);
  };

  // 서브밋시 변경 체크박스 적용
  const handleOk = () => {
    setSelectedItems(localSelectedItems);
    setIsModalOpen(false);
  };

  // 캔슬시 이전 체크박스 값 적용
  const handleCancel = () => {
    setLocalSelectedItems(selectedItems);
    setIsModalOpen(false);
  };

  return (
    <Modal title="항목선택" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <InfoWrap>
        <Form>
          {itemsByGroup.map((group) => (
            <div key={group.head}>
              <H2>{group.head}</H2>
              <DivWrap>
                {group.children.map((child) => (
                  <InputWrap key={child.id}>
                    <input
                      type="checkbox"
                      id={child.id}
                      name={child.label}
                      value={child.value}
                      onChange={checkHandler}
                      checked={localSelectedItems.has(child.value)}
                      disabled={child.value === '이름' || child.value === '휴대폰번호'}
                    />
                    <label htmlFor={child.label}>{child.label}</label>
                  </InputWrap>
                ))}
              </DivWrap>
            </div>
          ))}
        </Form>
      </InfoWrap>
    </Modal>
  );
};

export default AddressAddColumModal;
