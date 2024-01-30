import axios from "axios";

const postUser = async (formData) => {
  try {
    // Get the JWT token from your authentication system (e.g., stored in localStorage)
    const jwtToken = localStorage.getItem("token");

    // Use the REACT_APP_API_BASE_URL environment variable
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    // Make a POST request to your API endpoint with the JWT token in headers
    const response = await axios.post(`${apiUrl}/auth/register`, formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    console.log("User created successfully:", response.data);

    // You can return the response data or handle it as needed
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);

    // Check if the error response has data property
    if (error.response && error.response.data) {
      console.error("Error response data:", error.response.data);
    }

    // Handle the error, display a message, etc.
    throw error; // Re-throw the error so that the calling code can handle it if needed
  }
};

export default postUser;
