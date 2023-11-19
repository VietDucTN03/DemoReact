import React, { Component } from 'react'
import Item from './Item';

export default class ProductListItem extends Component {

    renderProductItem = () => {
        let {arrProduct} = this.props;
        return arrProduct.map((prod, index)=>{
            return <div className='col-4 mt-2' key={prod.id}>
                <Item product={prod}/>
            </div>
        })
    }
  render() {
    // let {arrProduct} = this.props;
    return (
      <div className='row'>
        {this.renderProductItem()}
      </div>
    )
  }
}
