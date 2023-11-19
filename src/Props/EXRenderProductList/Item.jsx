import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className='card'>
        <img src={product.image} alt="..." />
        <div className="card-body">
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <button className='btn btn-success'>Add to cart <i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
    )
  }
}
