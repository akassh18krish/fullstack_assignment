import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8000/oauth/token', {
      username,
      password,
      grant_type: 'password',
      client_id: 'YOUR_CLIENT_ID',
      client_secret: 'YOUR_CLIENT_SECRET',
    });

    localStorage.setItem('accessToken', response.data.access_token); // Store the token
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export default login;
