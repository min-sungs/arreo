import axios from 'axios';
import { instance } from './clientAxios';

export function sendMessage({ MessageData }: any) {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  return new Promise<void>((resolve, reject) => {
    const config = {
      method: 'post',
      // maxBodyLength: Infinity,
      url: `${SERVER_URL}/message/send`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        MessageData,
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          alert(response.data);
          resolve();
        }
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export const getSendMessageResult = async () => {
  try {
    const response = await instance.get('/result');
    return response.data;
  } catch (error) {
    console.log('Message Result Error', error);
    return error;
  }
};

// 두가지 api  형식 비교
// function sendMessage() {
//   return new Promise<void>((resolve, reject) => {
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: `${SERVER_URL}/message/send`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         ...MessageData,
//         rcvList: combinePhoneNumber,
//         snd_msg: messageContents,
//       },
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//         resolve();
//       })
//       .catch((error) => {
//         console.error(error);
//         reject(error);
//       });
//   });
// }

// export function sendMessage({ MessageData, combinePhoneNumber, messageContents }: any) {
//   const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//   // console.log(MessageData, combinePhoneNumber, messageContents);
//   return new Promise<void>((resolve, reject) => {
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: `${SERVER_URL}/message/send`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         ...MessageData,
//         rcvList: combinePhoneNumber,
//         snd_msg: messageContents,
//       },
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         resolve();
//         return response.data;
//       })
//       .catch((error) => {
//         console.error(error);
//         reject(error);
//       });
//   });
// }
