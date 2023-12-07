import React, { Component } from 'react'
import { connect } from 'react-redux'
import SanPhamRedux from './SanPhamRedux'

let dataProducts = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/BaiTapXemChiTiet/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/BaiTapXemChiTiet/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/BaiTapXemChiTiet/applephone.jpg" }
]

class DanhSachSanPhamRedux extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h3>Danh sách các Sản phẩm</h3>
        <div className="row">
            {dataProducts.map((sanPham) => {
                return <div className='col-4' key={sanPham.maSP}>
                    <SanPhamRedux sanPham={sanPham}/>
                </div>
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(DanhSachSanPhamRedux)