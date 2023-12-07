//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgState: './img/CarBasic/black-car.jpg'
}

const imgReducer = createSlice({
  name: 'imgReducer',  //Tên của reducer (góp phần tạo thành type action)
  initialState,
  reducers: {
    changeCarColorAction: (state, action) => {
        state.imgState = `./img/CarBasic/${action.payload}-car.jpg`
    }
  }
});

export const {changeCarColorAction} = imgReducer.actions

export default imgReducer.reducer



// export const imgReducer = (state = './img/CarBasic/black-car.jpg', action) => {
//     console.log(action)
//     if(action.type === 'CHANGE_CAR_COLOR_ACTION') {
//         state = `./img/CarBasic/${action.payload}-car.jpg`;
//         return state
//     }
//     return state;
// }