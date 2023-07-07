import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState:{
        value: 'dark',
    }, 
    reducers:{
        darkTheme:(state, action)=>{
            state.value = 'dark'
        },
        lightTheme:(state, value)=>{
            state.value = 'light'
        }
    }
})

export const {darkTheme, lightTheme} = themeSlice.actions
export default themeSlice.reducer