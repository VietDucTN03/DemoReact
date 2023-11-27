import React, { Component } from 'react'
import ProductForm from './ProductForm'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      {id:1, name:'iphone', price:1000, img:'https://picsum.photos/id/1/200/200', type:'phone', description:'iphone 9'},
      {id:2, name:'iphone XS', price:2000, img:'https://picsum.photos/id/2/200/200', type:'phone', description:'iphone XS'}
    ],
    productEdit: {
      id:'', 
      name:'', 
      price:'', 
      img:'', 
      type:'', 
      description:''
    }
  }

  addProduct = (newProduct) => {
    this.state.arrProduct.push(newProduct)
    // console.log(newProduct);
    this.setState({
      arrProduct:this.state.arrProduct
    })
  }

  updateProduct = (prodUpdate) => {
    // Tìm ra product có id = product update lấy ra thay đổi 
    let prod = this.state.arrProduct.find(pro => pro.id === prodUpdate.id);

    if (prod) {
      for (let key in prod) { // Lấy ra các trường prod trong arrProduct gán = dữ liệu sau khi bấm nút update
        prod[key] = prodUpdate[key]
      }
    }

    // Gọi hàm setState render lại giao diện
    this.setState({
      arrProduct: this.state.arrProduct
    })
  }

  deleteProduct = (idProduct) => {
    this.state.arrProduct = this.state.arrProduct.filter(prod => prod.id !== idProduct)
    this.setState({
      arrProduct:this.state.arrProduct
    })
  }

  editProduct = (prodClick) => {
    this.setState({
      productEdit:prodClick
    })
  }

  render() {
    return (
      <div className='container'>
        <h3>Product Management</h3>
        <ProductForm addProduct={this.addProduct} productEdit={this.state.productEdit} updateProduct={this.updateProduct}/>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {this.state.arrProduct.map((prod) => {
                return <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td><img src={prod.img} alt='...' width={50} height={50}/></td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button onClick={() => {
                      this.deleteProduct(prod.id)
                    }} className='btn btn-danger'><i className='fa fa-close'></i></button>

                    <button onClick={() => {
                      this.editProduct(prod);
                    }} className='btn btn-primary mx-2'><i className='fa fa-edit'></i></button>
                  </td>
                </tr>
              })}
            </tbody>
        </table>
      </div>
    )
  }
}
