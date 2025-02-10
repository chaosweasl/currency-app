import Background from "./Background";

import { useState, useEffect } from "react";
import axios from "axios";

function UI() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  const API_KEY = "fab5466580eea5d483944dca";
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

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
          <span className="input-group-text">
            {currencySymbols[currentCurrency]}
          </span>
          <input type="text" className="form-control" placeholder="Amount" />
        </div>

        <div
          id="currency-change"
          className="d-flex align-items-center"
          style={{ flex: "1 1 60%" }}
        >
          <div className="input-group">
            <input type="text" className="form-control" placeholder="From" />
          </div>

          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left-right" />
          </button>

          <div className="input-group align-items-start">
            <input type="text" className="form-control" placeholder="To" />
          </div>
        </div>
      </div>
    </Background>
  );
}

export default UI;
