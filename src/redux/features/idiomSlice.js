import {createSlice} from '@reduxjs/toolkit'

const idiomSlice = createSlice({
    name:'idiom',
    initialState:{
        value: 'english'
    },
    reducers:{
        ptIdiom:(state, action)=>{
            state.value = 'portuguese'
        },
        engIdidom:(state, action)=>{
            state.value = 'english'
        }
    }
})

export const {ptIdiom, engIdidom} = idiomSlice.actions
export default idiomSlice.reducer