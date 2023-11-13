import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        console.log('clicked');
    }

    sayHello = (name) => {
        alert(name);
    } 

    headleSayHello = (name) => {
        console.log(name);
    }

  render() {
    return (
      <div className='container'>
        <h3>HandleEvent</h3>
        <button className='btn btn-success' onClick={this.handleClick}>Click me</button>
        <button className='btn btn-success' onClick={(e) => {console.log('clicked')}}>Click me</button> 
        {/* Cách tối ưu nhất */}

        <button className='btn btn-success' onClick={(e) => {this.sayHello('Hoang')}}>Say hello</button>

        <button className='btn btn-success' onClick={this.headleSayHello.bind(this, 'Hoang')}>headleSayHello</button>

        <input type="text" className='w-25 form-control bg-secondary' onInput={(e) => {
            let value = e.target.value;
            e.target.style.color = 'white'
            console.log(value);
        }}/>
      </div>
    )
  }
}

// const eventFunction = () => {
//     return function () {
//         console.log('abc');
//     }
// }

// let hamCallBack = eventFunction()
// hamCallBack()
