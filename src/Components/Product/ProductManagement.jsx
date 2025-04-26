import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
  const [products, setProducts] = useState([])
  const handleProduct = newProduct => {
    setProducts([...products, newProduct])
  }
  return (
    <div>
      <h1>This is product table</h1>
      <ProductForm handleProduct = {handleProduct}></ProductForm>
      <ProductTable products = {products}></ProductTable>
    </div>
  );
};

export default ProductManagement;