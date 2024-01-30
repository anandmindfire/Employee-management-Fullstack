import axios from 'axios';

export const GetProfile = async (userId, jwtToken) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/auth/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data.user;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};


