import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gioHang: [
      // { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/BaiTapXemChiTiet/applephone.jpg" }
  ]
}

const sanPhamReducer = createSlice({
  name: 'sanPhamReducer',
  initialState,
  reducers: {
    themGioHangAction: (state, action) => {
      let {sanPham} = action.payload;
      //Xử lý thay đổi state.gioHang
      let spGioHang = {...sanPham,soLuong:1}
      //Kiểm tra sản phẩm có trong giỏ hàng hay không?
      let sp = state.gioHang.find(spGH => spGH.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1 
      } else {
        state.gioHang.push(spGioHang)
      }
    },
    xoaGioHangAction: (state, action) => {
      const maSPXoa = action.payload;
      // console.log(action);
      state.gioHang = state.gioHang.filter(sp => sp.maSP !== maSPXoa);
    },
    tangGiamSoLuongAction: (state, action) => {
      let {maSP,soLuong} = action.payload;
      let spGH = state.gioHang.find(sp=>sp.maSP === maSP);
      if(spGH) {
        spGH.soLuong += soLuong;
        if(spGH.soLuong <1 ){
            state.gioHang = state.gioHang.filter(sp => sp.maSP!== maSP);
        }
      } 
    }
  } 
});

export const {themGioHangAction, xoaGioHangAction, tangGiamSoLuongAction} = sanPhamReducer.actions

export default sanPhamReducer.reducer