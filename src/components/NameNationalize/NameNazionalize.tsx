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
      <tr key={item.country_id}>
        <td>Country: {item.country_id};</td>
        <td>Probability: {item.probability};</td>
      </tr>
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
        <h2>Name: {inputName}</h2>
        <table>
          <caption>Result</caption>
          {inputName === '' ? '' : getInfo(countries)}
        </table>
      </div>
    </div>
  );
}
