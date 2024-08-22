import React from 'react';

import ATitle from '../../Atom/ATitle';
import BaseBar from '../../Atom/BaseBar';

interface ITitleLine {
  type: 'main' | 'sub';
  text: string;
  color?: string;
  marginBottom: string;
  marginTop: string;
}

const TitleLine = (props: ITitleLine) => {
  return (
    <>
      {/* 아톰 */}
      <ATitle type={props.type} text={props.text} color={props.color} />
      {/* 아톰 */}
      <BaseBar marginBottom={props.marginBottom} marginTop={props.marginTop} />
    </>
  );
};

export default TitleLine;
