import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/UserSlice";
import ProjectSlice from "./slice/ProjectSlice";

const store = configureStore({
    reducer: {
        users: UserSlice,
        projects: ProjectSlice,
    }
});

export default store; 