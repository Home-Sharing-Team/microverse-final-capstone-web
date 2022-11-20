import axios from 'axios';
import { ACCESS_TOKEN_STORAGE_KEY } from '../config/token.config';

const API_BASE_URL = 'http://localhost:4000/api/v1';

// const API_BASE_URL = 'http://localhost:3000/api/v1';

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
  try {
    const response = await api.get('properties');
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const fetchUserReservations = async (userId) => {
  try {
    const response = await api.get(`users/${userId}/reservations`);
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const fetchPropertyById = async (propertyId) => {
  try {
    const response = await api.get(`properties/${propertyId}`);
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const fetchPropertiesByCategory = async (categoryId) => {
  try {
    const response = await api.get('properties', {
      params: {
        category: categoryId,
      },
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('categories');
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await api.post('auth/sign_in', {
      email,
      password,
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const signUp = async (name, email, password) => {
  try {
    const response = await api.post('auth/register', {
      name,
      email,
      password,
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const getMe = async (accessToken) => {
  try {
    const response = await api.get('auth/me', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const deleteReservationById = async (reservationId) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.delete(`reservations/${reservationId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};

export const createReservationFromApi = async ({
  guests,
  checkIn,
  checkOut,
  price,
  userId,
  hostingId,
}) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.post('reservations', {
      guests,
      check_in: checkIn,
      check_out: checkOut,
      price,
      user_id: userId,
      hosting_id: hostingId,
    }, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};
