/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../components/Counter/Counter';
import Sandwich from '../components/Sandwich/Sandwich';
import Car from '../components/Car/Car';
import CatFact from '../components/CatFact/CatFact';
import Layout from '../layouts/Layout/Layout';
import Home from '../layouts/Home/Home';
import CityPage from '../components/CityPage/CityPage';
import DogCard from '../components/DogCard/DogCard';
import Fruit from '../components/Fruit/Fruit';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Flower from '../components/FlowerCard/Flower';
import NameNazionalize from '../components/NameNationalize/NameNazionalize';
import Shop from '../components/Shop/Shop';
import ProductPage from '../components/ProductPage/ProductPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="car" element={<Car brand="bmw" color="yellow" />} />
        <Route path="cat-fact" element={<CatFact />} />
        <Route path="city" element={<CityPage />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dog" element={<DogCard />} />
        <Route path="flower" element={<Flower />} />
        <Route path="fruit" element={<Fruit title="Banane" color="yellow" weight={100} image="https://assets.stickpng.com/images/580b57fcd9996e24bc43c137.png" />} />
        <Route path="name-nationalize" element={<NameNazionalize />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="products" element={<Shop />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
