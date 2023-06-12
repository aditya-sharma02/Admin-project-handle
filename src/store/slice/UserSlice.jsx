import { createSlice } from '@reduxjs/toolkit'
import { deleteUser } from '../actions'

const UserSlice = createSlice({
    name: 'Users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        // deleteUser(state, action) {
        //     // state.splice(0, state.length)
        //     return [];
        //  },
    },
    extraReducers(builder) {
        builder.addCase(deleteUser, () => {
            return [];
        })
    }
})

export const { addUser, removeUser,  } = UserSlice.actions;
export default UserSlice.reducer;