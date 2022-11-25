/* eslint-disable camelcase */
import axios from 'axios';
import { ACCESS_TOKEN_STORAGE_KEY } from '../config/token.config';

// Local API url
// const API_BASE_URL = 'http://localhost:4000/api/v1';

// Live API url
const API_BASE_URL = 'https://home-sharing-api.onrender.com/api/v1';

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

export const fetchUserProperties = async (userId) => {
  try {
    const response = await api.get(`users/${userId}/properties`);
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

export const fetchUserById = async (userId) => {
  try {
    const response = await api.get(`users/${userId}`);
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

export const deleteHostingById = async (hostingId) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.delete(`hostings/${hostingId}`, {
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
  propertyId,
}) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.post('reservations', {
      guests,
      check_in: checkIn,
      check_out: checkOut,
      property_id: propertyId,
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

export const createHostingFromApi = async ({
  propertyId,
  rate,
  cycle,
  cleaningFee,
  minimumCycleAmount,
}) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.post('hostings', {
      rate,
      cycle,
      cleaning_fee: cleaningFee,
      minimum_cycle_amount: minimumCycleAmount,
      property_id: propertyId,
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

export const createNewPropertyApi = async ({
  name,
  description,
  guest_capacity,
  bedrooms,
  beds,
  baths,
  kind,
  size,
  address,
  categories,
}) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.post('properties', {
      name,
      description,
      guest_capacity,
      bedrooms,
      beds,
      baths,
      kind,
      size,
      address,
      categories,
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

export const updatePropertyIsPublic = async (propertyId, isPublic) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.patch(`properties/${propertyId}/visibility`, {
      is_public: isPublic,
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

export const deletePropertyFromApi = async (propertyId) => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    const response = await api.delete(`properties/${propertyId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return handleApiResponse(response);
  } catch (error) {
    return handleApiResponse(error.response);
  }
};
