import Background from "./Background";

import { useState, useEffect } from "react";
import axios from "axios";

function UI() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {}
  );
  const [currencies, setCurrencies] = useState<string[]>([]); // List of available currencies
  const [fromSearch, setFromSearch] = useState(""); // Search input for 'From'
  const [toSearch, setToSearch] = useState(""); // Search input for 'To'

  const API_KEY = "fab5466580eea5d483944dca";
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(API_URL);
        setExchangeRates(response.data.conversion_rates);
        setCurrencies(Object.keys(response.data.conversion_rates));
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleConversion = () => {
    if (amount && exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency];
      setConvertedAmount(Number((Number(amount) * rate).toFixed(2)));
    }
  };

  return (
    <Background>
      <div
        id="currency-input"
        className="d-flex justify-content-between align-items-center gap-3"
        style={{ flexWrap: "wrap" }}
      >
        <div
          className="input-group align-items-start"
          style={{ flex: "1 1 30%" }}
        >
          <span className="input-group-text">{fromCurrency}</span>
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              // console.log(event.target.value);
            }}
          />
        </div>

        <div
          id="currency-change"
          className="d-flex align-items-center"
          style={{ flex: "1 1 60%" }}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="From"
              value={fromSearch}
              onChange={(event) => {
                setFromSearch(event.target.value);
              }}
              onFocus={() => setFromSearch("")} //Reset when focused
            />
            {fromSearch && (
              <div
                className="dropdown-menu show"
                style={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  position: "absolute",
                }}
              >
                {currencies
                  .filter((cur) =>
                    cur.toLowerCase().includes(fromSearch.toLowerCase())
                  )
                  .map((cur) => (
                    <button
                      key={cur}
                      className="dropdown-item"
                      onClick={() => {
                        setFromCurrency(cur);
                        setFromSearch("");
                      }}
                    >
                      {cur}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleConversion}
          >
            <i className="bi bi-arrow-left-right" />
          </button>

          <div className="input-group align-items-start">
            <input
              type="text"
              className="form-control"
              placeholder="To"
              value={toSearch}
              onChange={(event) => setToSearch(event.target.value)}
              onFocus={() => setToSearch("")}
            />
            {toSearch && (
              <div
                className="dropdown-menu show"
                style={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  position: "absolute",
                }}
              >
                {currencies
                  .filter((cur) =>
                    cur.toLowerCase().includes(toSearch.toLowerCase())
                  )
                  .map((cur) => (
                    <button
                      key={cur}
                      className="dropdown-item"
                      onClick={() => {
                        setToCurrency(cur);
                        setToSearch("");
                      }}
                    >
                      {cur}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {convertedAmount !== null && (
        <div>
          <p className="text-dark">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </Background>
  );
}

export default UI;
