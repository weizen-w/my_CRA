import React, { useEffect, useState } from 'react';
import Product from './types/Product';

export default function Shop(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  async function loadProducts(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/products');
    const arr = await res.json();
    setProducts(arr);
  }
  useEffect(() => {
    loadProducts();
  }, []);
  function getProducts(arr: Product[]): JSX.Element {
    return (
      <>
        {arr.map((product: Product) => (
          <div>
            <h3>{product.title} </h3>
            <ul key={product.id}>
              <li>#{product.id}</li>
              <li>Price: {product.price} €</li>
              <li>Description: {product.description}</li>
              <li>Category: {product.category}</li>
              <img style={{ width: '100px' }} src={product.image} alt={product.id.toString()} />
            </ul>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <h1>Shop</h1>
      {getProducts(products)}
    </>
  );
}
