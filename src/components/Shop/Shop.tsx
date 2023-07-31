import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Product from './types/Product';

export default function Shop(): JSX.Element {
  const { productId } = useParams();
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
          <Link to={String(product.id)} style={{ textDecoration: 'none' }}>
            <h3>{product.title} </h3>
            <ul key={product.id}>
              <li>#{product.id}</li>
              <li>Price: {product.price} €</li>
              <li>Description: {product.description}</li>
              <li>Category: {product.category}</li>
              <img
                style={{ width: '100px' }}
                src={product.image}
                alt={product.id.toString()}
              />
            </ul>
          </Link>
        ))}
      </>
    );
  }
  return productId ? <Outlet /> : getProducts(products);
}
