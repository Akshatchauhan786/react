import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlog = createAsyncThunk('singleBlog/fetchBlog', async (id) => {
  try {
    const response = await fetch(`https://rmsdemo.com/projects/Budzet/front/blogs/${id}`);
    // const response = await fetch(`http://localhost/afnobackend/front/blogs/${id}`);
    // const response = await fetch(`http://localhost:5000/blogs/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch blog');
  }
});

const blogSlice = createSlice({
  name: 'singleBlog',
  initialState: {
    blog: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    // You can add additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
