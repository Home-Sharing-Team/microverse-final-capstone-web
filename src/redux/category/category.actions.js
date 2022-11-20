import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../../services/api.service';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const fetchCategoryItemsAsync = createAsyncThunk(
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_ASYNC,
  async () => {
    const categoryItems = await fetchCategories();
    return categoryItems;
  },
);
