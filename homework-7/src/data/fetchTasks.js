import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasks } from "../data/tasks";
import { createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 5000);
    });
});

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        tasks: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                console.log("Start loading...");
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                console.log("The end loading");
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                console.log("Failed to load tasks");
                state.loading = false;
            });
    },
});

export default loadingSlice.reducer;
