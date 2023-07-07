import axios from 'axios';

const API_URL = 'https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

