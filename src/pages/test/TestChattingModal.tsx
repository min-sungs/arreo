// import React, { useState } from 'react';
// import styled from 'styled-components';

// function TestChattingModal(): JSX.Element {
//     const [isActive, setIsActive] = useState<boolean>(false);

//     function onModal() {
//         setIsActive(true);
//         console.log('onModal', isActive);
//     }

//     function offModal(e: any) {
//         setIsActive(false);
//         console.log('offModal', isActive);
//     }

//     return (
//         <Container>
//             <ModalButton onClick={onModal}>버튼</ModalButton>
//             {isActive && (
//                 <ModalWrapper>
//                     <Modal>
//                         <Title>대화상대 선택</Title>
//                         <SearchBar type='text' placeholder='연락처를 입력하세요' />
//                         <ListContainer>
//                             <List>상대 1</List>
//                             <List>상대 2</List>
//                             <List>상대 3</List>
//                         </ListContainer>
//                         <Buttons>
//                             <Button>생성</Button>
//                             <Button onClick={offModal}>닫기</Button>
//                         </Buttons>
//                     </Modal>
//                 </ModalWrapper>
//             )}
//         </Container>
//     );
// }

// const Container = styled.div`
//     width: 100%;
//     height: calc(100vh - 28rem);
//     margin: 0 auto;
//     position: relative;

//     @media screen and (max-height: 750px) {
//         position: relative;
//         top: 4rem;
//     }
// `;

// const ModalButton = styled.button`
//     position: absolute;
//     top: 40%;
//     left: 20%;
//     font-size: 2rem;
// `;

// const ModalWrapper = styled.div`
//     z-index: 1;
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.4);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Modal = styled.div`
//     display: inline-block;
//     position: relative;
//     bottom: 10rem;
//     width: 45rem;
//     height: 35rem;
//     background-color: #fff;
//     border-radius: 4px;
//     box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
//         0px 1px 5px 0px rgba(0, 0, 0, 0.12);
//     padding: 2rem;
// `;

// const Title = styled.div`
//     font-size: 2.5rem;
// `;

// const SearchBar = styled.input`
//     display: block;
//     width: 90%;
//     height: 3rem;
//     margin: 2rem 0;
//     padding: 0.5rem 1.5rem;
//     outline: none;
//     border: 0;
//     border-radius: 30px;
//     background-color: #e9ecef;
//     font-size: 1.5rem;
//     font-weight: bolder;
// `;

// const ListContainer = styled.div`
//     height: 60%;
// `;

// const List = styled.div`
//     border: 1px solid black;
//     height: 20%;
//     margin-bottom: 2rem;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Buttons = styled.div`
//     width: fit-content;
//     position: absolute;
//     right: 20px;
//     bottom: 20px;
// `;

// const Button = styled.button`
//     font-size: 1.8rem;

//     :first-child {
//         margin-right: 1.5rem;
//     }
// `;

// export default TestChattingModal;
