import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Product from './types/Product';
import styles from './Shop.module.css';

export default function Shop(): JSX.Element {
  const { productId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  async function loadProducts(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/products');
    const arr = await res.json();
    setProducts(arr);
  }
  function getProducts(arr: Product[]): JSX.Element {
    return (
      <>
        {arr.map((product: Product) => (
          <Link to={String(product.id)} style={{ textDecoration: 'none' }} key={product.id}>
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
                <p className={styles.descriptionStyle}>
                  Description: {product.description}
                </p>
                <p className={styles.categoryStyle}>
                  Category: {product.category}
                </p>
              </ul>
            </div>
          </Link>
        ))}
      </>
    );
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return productId ? <Outlet /> : getProducts(products);
}
