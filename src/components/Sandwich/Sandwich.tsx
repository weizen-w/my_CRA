import React, { useState } from 'react';
import styles from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
  const [status, setStatus] = useState<string>('');
  function addBread(): void {
    setStatus(`${status} хлеб`);
  }
  function addSausage(): void {
    setStatus(`${status} колбаса`);
  }
  function addCheese(): void {
    setStatus(`${status} сыр`);
  }
  function clearStatus(): void {
    setStatus('');
  }
  return (
    <div>
      <h2 style={{ marginLeft: '135px' }}>Sandwich</h2>
      <button className={styles.btnStyle} type="button" onClick={addBread}>
        Добавить хлеб
      </button>
      <button className={styles.btnStyle} type="button" onClick={addSausage}>
        Добавить колбасу
      </button>
      <button className={styles.btnStyle} type="button" onClick={addCheese}>
        Добавить сыр
      </button>
      <p className={styles.statusStyle}>Бутерброд: {status}</p>
      <button
        className={`${styles.btnStyle} ${styles.clear}`}
        type="button"
        onClick={clearStatus}
      >
        Выкинуть этот бутерброт
      </button>
    </div>
  );
}
