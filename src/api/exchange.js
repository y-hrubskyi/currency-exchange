const myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const exchangeCurrency = ({ to, from, amount }) => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => console.log(result));
};
