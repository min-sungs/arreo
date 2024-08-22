import { useWatch } from 'react-hook-form';
import styled from 'styled-components';
import React from 'react';

const MessageSizeCheck = styled.span`
  display: block;
  margin: 0 0 0.5rem 1rem;
  font-size: 1.3rem;
  color: #141414;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MessageSizeCheckWatched = ({ control }: any) => {
  const messageEncode = useWatch({
    control,
    name: 'sndMsg', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    // defaultValue: '', // default value before the render
  });
  return <MessageSizeCheck style={{ color: 'red' }}>LMS {messageEncode.length}Byte</MessageSizeCheck>; // only re-render at the custom hook level, when firstName changes
};
export default MessageSizeCheckWatched;
