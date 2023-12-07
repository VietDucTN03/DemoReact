import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const {tongSoLuong, tongTien} = this.props;
    return (
    //   <div className='bg-secondary text-white d-flex p-3'>
    //     <NavLink className={({isActive}) => isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"} to='/'>Trang chủ</NavLink>
    //     <NavLink className={({isActive}) => isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"} to='/gio-hang'>Giỏ hàng</NavLink>
    //     <NavLink className={({isActive}) => isActive ? "bg-white text-dark p-3 mx-2" : "text-white mx-2"} to='/bt-car-color'>Bài tập change color</NavLink>
    //   </div>
        // bs5-navbar-background
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="/">ReactJS</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="gio-hang" aria-current="page" style={({isActive}) => isActive ? {border:'1px solid orange'} : {}}>
                            Giỏ hàng
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='bt-car-color' style={({isActive}) => isActive ? {border:'1px solid orange'} : {}}>Change Car Color</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/react-form' style={({isActive}) => isActive ? {border:'1px solid orange'} : {}}>React Form</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/react-life-cycle' style={({isActive}) => isActive ? {border:'1px solid orange'} : {}}>React Life-Cycle</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <NavLink className="dropdown-item" to="/redux-change-number">Change Number</NavLink>
                        <NavLink className="dropdown-item" to="/redux-change-car">Change Car</NavLink>
                        <NavLink className="dropdown-item" to="/redux-change-font-size">Change Font-Size</NavLink>
                    </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <NavLink to="/redux-gio-hang" className={"nav-link mx-4 text-white"}>
                        <i className='fa fa-2x fa-cart-plus'></i> ({tongSoLuong} - {tongTien.toLocaleString()})
                    </NavLink>
                </form>
                </div>
            </nav>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    let {gioHang} = state.gioHangState;
    let tongSoLuong = 0;
    let tongTien = 0;
    for (let spGH of gioHang ){
        tongSoLuong += spGH.soLuong;
        tongTien += spGH.soLuong * spGH.giaBan
    }
    //this.props = {tongSoLuong,tongTien}
    return {
        tongSoLuong,
        tongTien
    }
}
export default connect(mapStateToProps)(Header)
