import React from 'react';
import styled from 'styled-components';

interface BaseBarProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginBottom?: string;
  marginTop?: string;
}

const StyledBar = styled.div<BaseBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
`;

const BaseBar = ({ width, height, backgroundColor, marginBottom, marginTop }: BaseBarProps) => {
  return (
    <StyledBar
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      marginBottom={marginBottom}
      marginTop={marginTop}
    />
  );
};

BaseBar.defaultProps = {
  width: '100%',
  height: '1px',
  backgroundColor: '#BBB',
};

export default BaseBar;
