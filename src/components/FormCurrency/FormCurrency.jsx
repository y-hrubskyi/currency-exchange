import { exchangeCurrency } from 'api/exchange';
import React from 'react';

const FormCurrency = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.currency;
    const [amount, from, , to] = value.split(' ');
    //   console.log({ amount, from, to });
    exchangeCurrency({ amount, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="currency" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormCurrency;
