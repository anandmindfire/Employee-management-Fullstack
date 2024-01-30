import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_API_BASE_URL;

 
export const fetchEmployeeData = async (jwtToken) => {
    try {
      const response = await axios.get(`${baseApiUrl}/table/employees`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching employee data:', error);
      throw error;
    }
  };