import React from 'react';
import styled from 'styled-components';
import BaseButton from '../../../Atom/BaseButton';

const DivWrapper = styled.div`
  width: 40%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
`;

interface CallingNumberListProps {
  callback: string;
  phnId: string;
  regMethod: string;
  rsrvdId: string;
  usedDttm: string;
  verifiedYn: string;
  wrtDttm: string;
  originCallback: string;
}

const CallingNumberList = ({ allCallingNumberList, handleSubmit, handleDelete }: any) => {
  return (
    <DivWrapper>
      {allCallingNumberList?.map((el: CallingNumberListProps) => {
        return (
          <div key={el.callback}>
            {el.callback}
            {!el.callback.startsWith('015') && (
              <BaseButton
                type="button"
                width="10px"
                height="10px"
                backgroundColor="transparent"
                marginLeft="12px"
                fontSize="12px"
                fontWeight="600"
                value={el.callback}
                onClick={(e) => handleDelete(e,el.callback)}
              >
                X
              </BaseButton>
            )}
          </div>
        );
      })}
    </DivWrapper>
  );
};

export default CallingNumberList;
