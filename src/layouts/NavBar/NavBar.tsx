import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBard.module.css';

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink className={styles.link} to="/">Home</NavLink>
      <NavLink className={styles.link} to="car">Car</NavLink>
      <NavLink className={styles.link} to="cat-fact">Cat fact</NavLink>
      <NavLink className={styles.link} to="city">City</NavLink>
      <NavLink className={styles.link} to="counter">Counter</NavLink>
      <NavLink className={styles.link} to="dog">Dog</NavLink>
      <NavLink className={styles.link} to="flower">Flower</NavLink>
      <NavLink className={styles.link} to="fruit">Fruit</NavLink>
      <NavLink className={styles.link} to="name-nationalize">Name Nationalize</NavLink>
      <NavLink className={styles.link} to="sandwich">Sandwich</NavLink>
      <NavLink className={styles.link} to="shop">Shop</NavLink>
    </nav>
  );
}
