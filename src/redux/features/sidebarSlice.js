import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState:{
        value: false
    },
    reducers:{
        openSidebar: (state, action)=>{
            state.value = true
        },
        closeSidebar: (state, action) => {
            state.value = false
        }
    }
})

export const {openSidebar, closeSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer