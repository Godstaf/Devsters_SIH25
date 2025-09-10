import {configureStore} from '@reduxjs/toolkit'
import themeSlice from '../features/themeSlice.js'

export const store = configureStore({
    reducer:{
        theme: themeSlice,
    }
})