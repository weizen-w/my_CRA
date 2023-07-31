import React, { useState } from 'react';
import styles from './Counter.module.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  function handlePlus(): void {
    setCounter(counter + 1);
  }
  function handleMinus(): void {
    setCounter(counter - 1);
  }
  function handlePlusTen(): void {
    setCounter(counter + 10);
  }
  function handleMinusTen(): void {
    setCounter(counter - 10);
  }
  return (
    <div>
      <h2>Counter</h2>
      <div className={styles.divStyle}>
        <button
          className={`${styles.btnStyle} ${styles.minus}`}
          type="button"
          onClick={handleMinusTen}
        >
          -10
        </button>
        <button
          className={`${styles.btnStyle} ${styles.minus}`}
          type="button"
          onClick={handleMinus}
        >
          -
        </button>
        <span className={styles.valueStyle}>{counter}</span>
        <button
          className={`${styles.btnStyle} ${styles.plus}`}
          type="button"
          onClick={handlePlus}
        >
          +
        </button>
        <button
          className={`${styles.btnStyle} ${styles.plus}`}
          type="button"
          onClick={handlePlusTen}
        >
          +10
        </button>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Counter;
