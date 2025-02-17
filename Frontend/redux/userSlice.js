import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loding : false,
    error : false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
        signInStart: (state) => {
            state.loding = true
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loding = false;
            state.error = false;
        },
        signInFailure: (state,action) => {
            state.loding = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;

export default userSlice.reducer;