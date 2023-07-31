import React from 'react';

interface Props {
  brand: string;
  color: string;
}

export default function Car(props: Props): JSX.Element {
  const { brand, color } = props;
  return (
    <div style={{ backgroundColor: color }}>
      <h2>Car card</h2>
      <p>Марка: {brand}</p>
      <p>Цвет: {color}</p>
    </div>
  );
}
