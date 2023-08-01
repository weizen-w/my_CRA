import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../Shop/types/Product';
import styles from '../Shop/Shop.module.css';

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
  }, [productId]);
  return (
    <div>
      <Link to="..">Назад к списку товаров</Link>
      <h3 className={styles.h3Style}>{product.title} </h3>
      <div className={styles.blockStyle}>
        <img
          className={styles.imgStyle}
          src={product.image}
          alt={product.id.toString()}
        />
        <ul className={styles.ulStyle}>
          <p className={styles.idStyle}>art.# {product.id}</p>
          <p className={styles.priceStyle}>Price: {product.price} €</p>
          <p className={styles.descriptionStyle}>Description: {product.description}</p>
          <p className={styles.categoryStyle}>Category: {product.category}</p>
        </ul>
      </div>
    </div>
  );
}
