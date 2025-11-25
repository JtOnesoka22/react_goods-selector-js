import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [product, setProduct] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product === '' ? 'No goods Selected' : `${product} is selected`}
        {product && (
          <button
            onClick={() => setProduct('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <ul>
          {goods.map(good => (
            <li
              key={good}
              data-cy="Good"
              className={good === product ? 'has-background-success-light' : ''}
            >
              <td className="is-vcentered">
                {product === '' && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-success"
                    onClick={() => setProduct(good)}
                  >
                    +
                  </button>
                )}

                {good === product && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setProduct('')}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </li>
          ))}
        </ul>
      </table>
    </main>
  );
};
