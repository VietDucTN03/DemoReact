import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    let {arrGioHang} = this.props;
    return (
      <div>
        <h4 className='mt-2'>Giỏ hàng</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrGioHang.map((sanPham) => {
              return <tr key={sanPham.maSP}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td><img src={sanPham.hinhAnh} alt="..." width={50} height={50} /></td>
                <td>{sanPham.giaBan}</td>
                <td>
                  <button className='btn btn-dark mx-2' onClick={() => {
                    this.props.capNhatGioHang(sanPham.maSP,1);
                  }}>+</button>
                  {sanPham.soLuong}
                  <button className='btn btn-dark mx-2' onClick={() => {
                    this.props.capNhatGioHang(sanPham.maSP,-1);
                  }}>-</button>
                </td>
                <td>{sanPham.giaBan * sanPham.soLuong}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => {
                    this.props.xoaGioHang(sanPham.maSP);
                  }}>Xóa</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
