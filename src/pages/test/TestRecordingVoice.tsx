// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { IoMicCircle } from "react-icons/io5";

// function TestPage(): JSX.Element {
//   const [isRecording, setIsRecording] = useState<boolean>(false);
//   const [media, setMedia] = useState<any>();
//   const [chunks, setChunks] = useState<Blob[]>([]); // 녹음한 데이터를 저장할 배열
//   const [audioURL, setAudioURL] = useState<string>("");

//   const onRecord = () => {
//     if (navigator.mediaDevices) {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream: any) => {
//           const mediaRecorder = new MediaRecorder(stream); // 객체 생성
//           mediaRecorder.start(); // 녹음 시작
//           console.log(mediaRecorder.state);

//           mediaRecorder.addEventListener("dataavailable", (e: any) => {
//             setChunks((prevChunks) => [...prevChunks, e.data]);
//           });

//           setMedia(mediaRecorder); // 객체를 다른 블록에서도 사용할 수 있도록
//           setIsRecording(true);
//         })

//         .catch((err) => {
//           console.log("마이크 사용 권한이 없습니다.");
//         });
//     } else {
//       console.log("마이크 사용 권한이 없습니다.");
//     }
//   };

//   useEffect(() => {
//     console.log("useEffect_chunks", chunks);
//     const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
//     const audioURL = URL.createObjectURL(blob);
//     setAudioURL(audioURL);
//   }, [chunks]);

//   const offRecord = () => {
//     if (media) {
//       media.stop();
//       setChunks([]);
//       setIsRecording(false);
//       console.log(audioURL);
//     } else console.log("blob 생성 실패");
//     console.log(media.state);
//   };

//   return (
//     <Container>
//       <RecordingButton onClick={isRecording ? offRecord : onRecord}>
//         <IoMicCircle />
//       </RecordingButton>
//       {audioURL && <AudioPlayer>{/* <audio src={audioURL} controls /> */}</AudioPlayer>}
//     </Container>
//   );
// }

// const Container = styled.div`
//   margin: 0 auto;

//   @media screen and (max-height: 750px) {
//     position: relative;
//     top: 4rem;
//   }
// `;

// const RecordingButton = styled.button`
//   appearance: none;
//   border: none;
//   background: none;
//   font-size: 10rem;

//   svg {
//     color: #f44336;

//     &:hover {
//       cursor: pointer;
//     }
//   }
// `;

// const AudioPlayer = styled.div``;

// export default TestPage;
