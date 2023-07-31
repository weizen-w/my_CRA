import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../Shop/types/Product';

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const initialValue: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  const [product, setProduct] = useState<Product>(initialValue);
  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [product.id]);
  return (
    <div>
      <Link to="..">Назад к списку товаров</Link>
      <h3>{product.title} </h3>
      <ul>
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
    </div>
  );
}
