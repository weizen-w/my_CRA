import React from 'react';
import styles from './FlowerCard.module.css';

interface Flower {
  image: string;
  color: string;
  title: string;
  family: string;
  price: number;
}

interface Props {
  flower: Flower;
}

export default function FlowerCard(props: Props): JSX.Element {
  const { flower } = props;
  // eslint-disable-next-line object-curly-newline
  const { image, color, title, family, price } = flower;
  return (
    <div className={styles.divStyle}>
      <h2 className={styles.h2Style}>Flower {title}</h2>
      <p style={{ fontSize: '20px', fontStyle: 'italic' }}>Description:</p>
      <ul className={styles.descriptionStyle}>
        <li>Title: {title}</li>
        <li>Family: {family}</li>
        <li style={{ color }}>Color: {color}</li>
        <li className={styles.priceInfoStyle}>Price: {price} €</li>
      </ul>
      <p style={{ fontSize: '20px', fontStyle: 'italic' }}>Foto:</p>
      <img className={styles.imgStyle} src={image} alt={title} />
    </div>
  );
}
