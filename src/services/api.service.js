import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProperties = async () => {
  const { data } = await api.get('properties');
  return data;
};
