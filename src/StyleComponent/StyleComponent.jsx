import React, { Component } from "react";

//import css dạng module chỉ tác động đến component import và sử dụng 
import style from './StyleComponent.module.scss'

export default class StyleComponent extends Component {
  render() {
    let classNameCss = 'text-red'
    let obStyle = {
        fontSize: '20px',
        color: 'white',
        backgroundColor: 'red',
        padding: '15px'
    }
    return (
      <div className="container">
        <p className={`bg-primary ${style[classNameCss]}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div style={obStyle}>abc</div>

      </div>
    );
  }
}
