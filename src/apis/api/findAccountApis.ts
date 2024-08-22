import axios from 'axios';

export const postFindId = async (nInfo: any) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/id`, {
      encodeData: JSON.parse(nInfo),
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const postFindPw = async (nInfo: any) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/password`, {
      encodeData: JSON.parse(nInfo),
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
