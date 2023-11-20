import React, { Component } from "react";

export default class SanPhamComponent extends Component {
  render() {
    let {sanPham, handleClickXemChiTiet} = this.props;
    return (
      <div>
        <h3>SanPhamComponent</h3>
        <div className="card">
          <img src={sanPham.hinhAnh} alt="..." height={350} />
          <div className="card-body">
            <h3>{sanPham.tenSP}</h3>
            <p>{sanPham.giaBan}</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                handleClickXemChiTiet(sanPham)
              }}>Xem chi tiet</button>
          </div>
        </div>
      </div>
    );
  }
}
