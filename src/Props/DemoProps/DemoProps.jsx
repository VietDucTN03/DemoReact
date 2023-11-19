import React, { Component } from "react";
import Card from "./Card";
import ProductCom from "./ProductCom";

export default class DemoProps extends Component {
  render() {
    const person = {
      id: 1,
      name: "Fuck",
      age: 19,
      image: "https://i.pravatar.cc?u=50",
    };
    return (
      <div className="container">
        <h3>DemoProps</h3>
        <div className="d-flex">
          <div className="w-25">
            <Card name="Duc" age={20} image={"https://i.pravatar.cc?u=1"} />
          </div>
          <div className="w-25">
            <Card name="Hai" age={18} image={"https://i.pravatar.cc?u=10"} />
          </div>
          <div className="w-25">
            <Card name="Hoang" age={20} image={"https://i.pravatar.cc?u=20"} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4">
            <ProductCom data={person} desc={<p className="text-danger">Lorem ipsum dolor sit amet.</p>}/>
          </div>
        </div>
      </div>
    );
  }
}
