import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const handleApiResponse = (response) => {
  if (!response.data.success) {
    throw new Error(response.data.error);
  }

  return response.data.data;
};

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProperties = async () => {
  const response = await api.get('properties');
  return handleApiResponse(response);
};

export const signIn = async (email, password) => {
  const response = await api.post('auth/login', {
    email,
    password,
  });
  return handleApiResponse(response);
};

export const signUp = async (name, email, password) => {
  const response = await api.post('auth/signup', {
    name,
    email,
    password,
  });
  return handleApiResponse(response);
};

export const getMe = async (accessToken) => {
  const response = await api.get('auth/me', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return handleApiResponse(response);
};
