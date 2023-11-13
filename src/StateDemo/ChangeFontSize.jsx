import React, { Component } from "react";

export default class ChangeFontSize extends Component {
  //State: là thuộc tính có sãn của class Component, dùng để quản lý giá trị thay đổi của component
  state = {
    fSize: 16,
  };

  render() {
    return (
      <div className="container">
        <h3>ChangeFontSize</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet.
        </p>
        <button className="btn btn-primary" onClick={() => {
            //this.setState là 1 hàm có sãn của react Class component nhận vào state với gía trị mới và gọi hàm render lại giao diện
            let newState = {
                fSize: this.state.fSize + 10
            }
            this.setState(newState)
            // this.state.fSize += 5;
        }}>+</button>
      </div>
    );
  }
}
