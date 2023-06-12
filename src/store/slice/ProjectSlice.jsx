import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../actions";

const ProjectSlice = createSlice({
    name: 'Project',
    initialState: [],
    reducers: {
        addProject(state, action) { 
            state.push(action.payload)
        },
        removeProject(state, action) {
            state.splice(action.payload,1)
         },
        // deleteuser() {
        //     return [];
        // },
    },
    extraReducers(builder) {
        builder.addCase(deleteUser ,() => {
            return [];
        })
    }
})

export const { addProject, removeProject, deleteAllProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;