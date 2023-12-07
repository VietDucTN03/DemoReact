import {configureStore} from '@reduxjs/toolkit'
import { numberReducer } from './reducers/numberReducer'
import imgReducer from './reducers/imgReducer'
import fontSizeReducer from './reducers/fontSizeReducer'
import sanPhamReducer from './reducers/sanPhamReducer'


export const store = configureStore({
    reducer: {
        //chứa toàn bộ state của ứng dụng
        number:numberReducer,
        img: imgReducer,
        fSizeState:fontSizeReducer,
        gioHangState:sanPhamReducer
    }
})