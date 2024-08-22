import React, { useState } from 'react';
import styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaxIcon from '@mui/icons-material/Fax';
import MicIcon from '@mui/icons-material/Mic';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// import utillMessage from '../../../apis/utils/img/utillImage.png';

interface ButtonProps {
  id: string;
  key: number;
  onClick?: (e: React.MouseEvent) => void;
  disableElevation: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.9rem 1.9rem 0 0;
  /* background-color: #dee2e6; */
  background: radial-gradient(ellipse at 50% 200%, rgba(220, 220, 220, 1) 0%, #f5f5f522 70%);
  margin-top: -70px;
`;

const Button = styled.div<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.2rem 0;
  border-radius: 1.9rem 1.9rem 0 0;
  position: relative;
  transition: all 0.2s ease-out;

  :first-child {
    border-radius: 1.9rem 1.9rem 0 0;
  }
  :last-child {
    border-radius: 1.9rem 1.9rem 0 0;
  }

  .icon {
    display: inline-block;
    color: gray;
    font-size: 2.6rem;
  }

  &.active {
    background: #f5f6fa;
    top: 1px;
    box-shadow: 0px -4px 6px -3px rgba(0, 0, 0, 0.5);

    .icon {
      color: #1175f7;
      transform: scale(1.2);
    }
  }
`;

const UtilBar = () => {
  const [buttonState, setbuttonState] = useState([true, false, false, false, false]);

  // const icons = [CallIcon, MailIcon, AlternateEmailIcon, FaxIcon, MicIcon, QuestionAnswerIcon];
  const icons = [CallIcon];

  const buttonStateHandler = (e: React.MouseEvent) => {
    const btnIdx: any = e.currentTarget.id;

    if (buttonState[btnIdx] === true) return;

    const newState = [false, false, false, false, false, false];
    newState.splice(btnIdx, 1, true);
    setbuttonState(newState);
  };

  return (
    <Container>
      {/* <UtilImage /> */}
      {/* <img alt="iPhone_01" src={utillMessage} /> */}
      {icons.map((_, idx: any) => {
        const Icon: any = icons[idx];

        return (
          <Button
            className={buttonState[idx] ? 'active' : ''}
            id={idx}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            onClick={buttonStateHandler}
            disableElevation
          >
            <Icon icon={icons[idx]} className="icon" />
          </Button>
        );
      })}
    </Container>
  );
};

export default UtilBar;
