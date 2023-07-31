import React from 'react';

interface Props {
  title: string;
  color: string;
  weight: number;
  image: string;
}

export default function Fruit(props: Props): JSX.Element {
  // eslint-disable-next-line object-curly-newline
  const { title, color, weight, image } = props;
  return (
    <div style={{ backgroundColor: color, width: '400px', display: 'flex' }}>
      <div>
        <h2>Fruit {title}</h2>
        <p>Color: {color}</p>
        <p>Weight: {weight} gramm</p>
      </div>
      <img style={{ width: '200px', margin: '10px' }} src={image} alt={title} />
    </div>
  );
}
