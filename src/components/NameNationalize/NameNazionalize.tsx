import React, { useEffect, useState } from 'react';

export default function NameNazionalize(): JSX.Element {
  const [inputName, setInputName] = useState('');
  const [countries, setCountries] = useState([{}]);
  function fetchNameNazi(): void {
    fetch(`https://api.nationalize.io/?name=${inputName}`)
      .then((res: Response) => res.json())
      .then((obj: { country: string[] }) => {
        const { country: objCountry } = obj;
        setCountries(objCountry);
      });
  }
  useEffect(fetchNameNazi, [inputName]);
  function getInfo(arr: any): JSX.Element {
    return (
      arr.map((item: { country_id: string; probability: number }) => (
      <div key={item.country_id}>
        <p>Country: {item.country_id}; Probability: {item.probability};</p>
      </div>
    )));
  }
  return (
    <div>
      <h1>Predict the nationality of a name</h1>
      <form>
        <input
          type="text"
          onChange={(event) => setInputName(event.target.value)}
        />
      </form>
      <div>
        <h1>Name: {inputName}</h1>
        <h2>Result</h2>
        {inputName === '' ? '' : getInfo(countries)}
      </div>
    </div>
  );
}
