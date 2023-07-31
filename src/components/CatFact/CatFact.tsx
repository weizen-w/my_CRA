import React, { useEffect, useState } from 'react';
import styles from './CatFact.module.css';

export default function CatFact(): JSX.Element {
  const [fact, setFact] = useState('');
  function fetchFact(): void {
    fetch('https://catfact.ninja/fact')
      .then((res: Response) => res.json())
      .then((obj: { fact: string }) => {
        const { fact: message } = obj;
        setFact(message);
      });
  }
  useEffect(fetchFact, []);
  return (
    <div className={styles.divStyle}>
      <h1 className={styles.h1Style}>Random fact about cat</h1>
      <button className={styles.btnStyle} type="button" onClick={fetchFact}>Update</button>
      <span className={styles.factStyle}>{fact}</span>
    </div>
  );
}
