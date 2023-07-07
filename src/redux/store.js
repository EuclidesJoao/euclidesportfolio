import {configureStore} from '@reduxjs/toolkit';
import idiomReducer from './features/idiomSlice';
import themeReducer from './features/themeSlice';
import sidebarSlice from './features/sidebarSlice';

export default configureStore({
    reducer:{
        idiom: idiomReducer,
        theme: themeReducer,
        sidebar: sidebarSlice,
    }
})