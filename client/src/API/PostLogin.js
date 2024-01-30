import axios from "axios";
const baseApiUrl = process.env.REACT_APP_API_BASE_URL;


export const PostLogin = async (username, password) => {
    try {
      const response = await axios.post(`${baseApiUrl}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  