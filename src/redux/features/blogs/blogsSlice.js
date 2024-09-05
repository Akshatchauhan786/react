import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: '',
};

// Async thunk to fetch blogs data from API
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const response = await fetch('https://rmsdemo.com/projects/Budzet/front/blogs');
    // const response = await fetch('http://localhost/afnobackend/front/blogs');
    // const response = await fetch('http://localhost:5000/blogs');
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
});

// Slice definition
const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
