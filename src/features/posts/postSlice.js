import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

const postSlice = createSlice({
    name: "posts",
    initialState: { items: [], loading: true },
    reducers: {
        deletePost: (state, action) => {
            state.items = state.items.filter(post => post.id !== action.payload);
        },
        setloading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
    }
});

export const { deletePost, setloading } = postSlice.actions;
export default postSlice.reducer;