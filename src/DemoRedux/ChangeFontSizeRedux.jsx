//rcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFontSizeAction } from '../redux/reducers/fontSizeReducer';

//bỏ export
class ChangeFontSizeRedux extends Component {
  render() {
    let {fSizeState,dispatch} = this.props;
    console.log(this.props);
    return (
      <div className='container'>
        <p style={{fontSize:fSizeState.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga.</p>
        <button className='btn btn-success' onClick={() => {
          //Tạo ra action được export từ file rxSlice
          const action = changeFontSizeAction(1)
          //Dispatch action lên reducer
          dispatch(action)
        }}>+</button>
        <button className='btn btn-secondary mx-2' onClick={() => {
          const action = changeFontSizeAction(-1)
          //Dispatch action lên reducer
          dispatch(action)
        }}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fSizeState:state.fSizeState,
})

//bỏ mapDispatchToProps
// const mapDispatchToProps = {}

export default connect(mapStateToProps)(ChangeFontSizeRedux)  //Xóa mapDispatchToProps