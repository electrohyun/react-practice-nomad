import { useEffect, useState } from "react";

function App() {
  const [money, setMoney] = useState(10);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch((err) => console.log("백엔드가 잘못함" + err));
  }, []);
  const onChange = (event) => {
    setMoney(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <br />
      <input 
      onChange={onChange}
      value={money}
      type="number" 
      placeholder="input money..." 
      />
      <br />
      <ul>
        {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}): {money / coin.quotes.USD.price} 개 구매 가능</li>)}
      </ul> 
      {/* <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</li>)}
      </ul> */}
    </div>
  );
}

export default App;
