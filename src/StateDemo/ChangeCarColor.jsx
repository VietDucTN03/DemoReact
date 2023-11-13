import React, { Component } from 'react'

export default class ChangeCarColor extends Component {

    state = {
        imgCar:'./img/CarBasic/black-car.jpg'
    }
    changColor = (color) => {
        this.setState({
            imgCar:`./img/CarBasic/${color}-car.jpg`
        })
    }
  render() {
    return (
      <div className='container'>
        <h3>ChangeCarColor</h3>
        <div className="row">
            <div className="col-6">
                <img className='w-100' src={this.state.imgCar} alt="" />
            </div>
            <div className="col-6">
                <button className='btn btn-danger' onClick={() => {
                    this.changColor('red')
                }}>Red</button>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.changColor('black')
                }}>Black</button>
                <button className='btn btn-default mx2' onClick={() => {
                    this.changColor('silver')
                }}>Silver</button>
                <button className='btn btn-secondary' onClick={() => {
                    this.changColor('steel')
                }}>Steel</button>
            </div>
        </div>
      </div>
    )
  }
}
