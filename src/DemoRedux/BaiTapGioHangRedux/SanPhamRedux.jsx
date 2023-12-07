import React, { Component } from 'react'
import { connect } from 'react-redux'
import { themGioHangAction } from '../../redux/reducers/sanPhamReducer';

class SanPhamRedux extends Component {
  render() {
    const {sanPham,dispatch} = this.props;
    console.log(this.props);
    return (
      <div className='card my-4'>
        <img height={350} src={sanPham.hinhAnh} alt="..." />
        <div className="card-body">
            <h3>{sanPham.tenSP}</h3>
            <p>{sanPham.giaBan.toLocaleString()}</p>
            <button className='btn btn-primary' onClick={() => {
                //Đưa dữ liệu của sản phẩm được click lên redux
                const action = themGioHangAction({sanPham});
                //Đưa dữ liệu lên redux
                dispatch(action)
            }}>Thêm vào giỏ hàng <i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
    )
  }
}

export default connect()(SanPhamRedux)