import React, { Component } from 'react'
import {connect} from 'react-redux'

class ChangeCarColorRedux extends Component {
  render() {
    let {img,dispatch} = this.props;
    console.log(this.props)
    return (
      <div className='container'>
        <h3>Change car color</h3>
        <div className='row'>
          <div className="col-6">
            <img src={img} alt="..." className='w-100' />
          </div>
          <div className="col-6">
            <button className='btn btn-danger' onClick={() => {
              // Tạo action đưa dữ liệu lên store
              const action = {
                type: 'CHANGE_CAR_COLOR_ACTION',
                payload: 'red'
              };
              // Dùng props dispatch đưa dữ liệu lên redux
              dispatch(action)
            }}>Red</button>
            <button className='btn btn-dark mx-2' onClick={() => {
              // Tạo action đưa dữ liệu lên store
              const action = {
                type: 'CHANGE_CAR_COLOR_ACTION',
                payload: 'black'
              };
              // Dùng props dispatch đưa dữ liệu lên redux
              dispatch(action)
            }}>Black</button>
          </div>
        </div>
      </div>
    )
  }
}

/*
    Viết tắt của cú pháp es6 => {return} tương đương => (gia_tri_return)
*/

// const mapStateToProps = state => ({
//   img: state.img
// })

const mapStateToProps = (state) => {
  return {
    img: state.img,
  }
}

// const ComponentWithRedux = connect(mapStateToProps)(ChangeCarColorRedux)
// export default ComponentWithRedux
export default connect(mapStateToProps)(ChangeCarColorRedux)

const func = () => (1)