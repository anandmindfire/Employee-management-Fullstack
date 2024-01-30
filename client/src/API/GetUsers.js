import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
console.log(baseApiUrl,"baseapi");

export const GetUsers = async (jwtToken) => {
  try {
    const response = await axios.get(`${baseApiUrl}/auth/users`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
