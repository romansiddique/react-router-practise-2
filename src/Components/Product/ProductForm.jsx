import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {

  const [error, setError] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const name = e.target.productName.value
    const price = e.target.productPrice.value
    const quantity = e.target.productQuantity.value

    const product = {
      name,
      price,
      quantity
    }

    if (name.length === 0) {
      setError('please enter product name')
      return;
    }
    else if (!price) {
      setError('Please Enter price')
      return;
    }
    else if (price < 0) {
      setError('Price can not be negative')
      return;
    }
    else if (price === 0) {
      setError('price can not be zero');
      return;
    }
    else if (!quantity) {
      setError('Please Enter quantity')
      return;
    }
    else if (quantity < 0) {
      setError('quantity can not be negative')
      return;
    }
    else if (quantity === 0) {
      setError('quantity can not be zero');
      return;
    }
    else {
      setError('')
    }
    // console.log(product)
    handleProduct(product)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>

      <input type="text" name="productName" id="" placeholder='Product Name' />
      <br />
      <br />
      <input type="number" name="productPrice" placeholder='Product Price' />
      <br />
      <br />
      <input type="number" name="productQuantity" placeholder='Product Quantity' />
      <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p>
        <small>{ error}</small>
      </p>
    </div>
  );
};

export default ProductForm;