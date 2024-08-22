// import React, { useState, useRef, useLayoutEffect, ChangeEvent } from 'react';
// import styled from 'styled-components';
// import ChatBubble from '../../components/addressBook/softPhone/ChatBubble';
// import { AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';

// function TestChatting() {
//     const [inputMsg, setInputMsg] = useState<string>('');
//     const [messages, setMessages] = useState<string[]>([]);
//     const [filePlaceholder, setFilePlaceholder] = useState<string>('');
//     const scrollRef = useRef<HTMLInputElement | null>(null);
//     //   console.log(scrollRef);
//     function handleInputMsg(e: ChangeEvent<HTMLInputElement>) {
//         setInputMsg(e.target.value);
//         // console.log(inputMsg);
//     }

//     const SendMessage = (): void => {
//         if (inputMsg === '') {
//             return;
//         }
//         setMessages([...messages, inputMsg]);
//         setInputMsg('');
//         // console.log(messages);
//     };

//     function handleEnter(e: React.KeyboardEvent<HTMLInputElement>): void {
//         if (e.key === 'Enter') {
//             SendMessage();
//         }
//     }

//     useLayoutEffect(() => {
//         if (scrollRef.current) {
//             scrollRef.current.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'end',
//                 inline: 'nearest',
//             });
//         }
//     }, [messages]);

//     return (
//         <Container>
//             <ChattingWrapper>
//                 {messages.map((message, idx) => {
//                     return <ChatBubble key={idx} message={message} />;
//                 })}
//                 <div ref={scrollRef}></div>
//             </ChattingWrapper>
//             <InputWrapper>
//                 <CustomInput
//                     type='text'
//                     value={inputMsg}
//                     onChange={handleInputMsg}
//                     onKeyDown={handleEnter}
//                 />
//                 <SendButtons>
//                     <InputFileButton htmlFor='inputFile'>
//                         <AiOutlinePaperClip />
//                     </InputFileButton>
//                     <input
//                         type='file'
//                         id='inputFile'
//                         style={{ display: 'none' }}
//                         onChange={(e) => {
//                             e.target.files && setFilePlaceholder(e.target.files[0].name);
//                         }}
//                     />
//                     <InputTextButton onClick={SendMessage}>
//                         <AiOutlineSend className='iconButton' />
//                     </InputTextButton>
//                 </SendButtons>
//             </InputWrapper>
//             <InputFileName>첨부 파일 : {filePlaceholder}</InputFileName>
//         </Container>
//     );
// }

// const Container = styled.div`
//     width: 100%;
//     height: calc(100vh - 28rem);
//     margin: 0 auto;

//     @media screen and (max-height: 750px) {
//         position: relative;
//         top: 4rem;
//     }
// `;

// const ChattingWrapper = styled.div`
//     width: 50%;
//     height: 75%;
//     margin: 0 auto;
//     overflow-y: scroll;
//     margin-top: 6rem;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
// `;

// const InputWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 6rem;
//     margin-left: 5rem;
//     position: relative;
// `;

// const CustomInput = styled.input`
//     width: 35rem;
//     padding: 1.2rem 8rem 1.2rem 1.2rem;
//     font-size: 2rem;

//     #inputFile {
//         display: none;
//     }
// `;

// const SendButtons = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     position: relative;
//     right: 7rem;
//     margin-top: 0.3rem;
// `;

// const InputFileButton = styled.label`
//     cursor: pointer;
//     font-size: 2.6rem;
//     margin-right: 1rem;

//     &:hover {
//         color: #1175f7;
//     }
// `;

// const InputTextButton = styled.div`
//     cursor: pointer;
//     font-size: 2.4rem;

//     &:hover {
//         color: #1175f7;
//     }
// `;

// const InputFileName = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.4rem;
//     margin-top: 2rem;
// `;

// export default TestChatting;
