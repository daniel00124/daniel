import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, category }, thunkAPI) => {
    const response = await axios.get(`http://localhost:4000/api/products?page=${page}&pageSize=9&category=${category}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    totalPages: 0,
    currentPage: 1,
    CATEGORY: 'sports',
    selectedProduct: null,
    status: 'idle', 
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.CATEGORY = action.payload;
      state.currentPage = 1; 
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, selectProduct, setPage } = productSlice.actions;

export default productSlice.reducer;