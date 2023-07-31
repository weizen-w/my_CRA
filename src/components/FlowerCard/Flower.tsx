import React from 'react';
import FlowerCard from './FlowerCard';

export default function Flower(): JSX.Element {
  const flower = {
    image: 'https://www.rosemarkt.ru/resources/data/photos/56533627a5b1a/big.jpg',
    color: 'red',
    title: 'rose',
    family: 'PINK',
    price: 20,
  };
  return (
    <div>
      <FlowerCard flower={flower} />
    </div>
  );
}
