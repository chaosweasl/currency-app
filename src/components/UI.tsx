import Background from "./Background";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

//I never finished this because the CSS I made was too messy, pure spaghetti code

function UI() {
  const API_KEY = "fab5466580eea5d483944dca";
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyList, setCurrencyList] = useState<string[]>([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState<string[]>([]);
  const [conversionRate, setConversionRate] = useState<number | null>(null); // Store conversion rate
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const currencies = Object.keys(response.data.conversion_rates);
      setCurrencyList(currencies);
      setFilteredCurrencies(currencies);
    });
  }, []);

  useEffect(() => {
    // Fetch conversion rate whenever fromCurrency or toCurrency changes
    if (fromCurrency && toCurrency) {
      const fetchConversionRate = async () => {
        try {
          const response = await axios.get(API_URL);
          const rateFromUSD = response.data.conversion_rates[fromCurrency];
          const rateToUSD = response.data.conversion_rates[toCurrency];
          const rate = rateToUSD / rateFromUSD; // Conversion rate from one currency to another
          setConversionRate(rate);
        } catch (error) {
          console.error("Error fetching conversion rate", error);
        }
      };

      fetchConversionRate();
    }
  }, [fromCurrency, toCurrency]); // Only run when fromCurrency or toCurrency changes

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = currencyList.filter((currency) =>
        currency.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCurrencies(filtered);
    } else {
      setFilteredCurrencies(currencyList);
    }
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleCurrencySelect = (currency: string, isFrom: boolean) => {
    if (isFrom) {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
    setShowDropdown(false);
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
        setShowDropdown(false);
      }
    }, 100);
  };

  return (
    <Background>
      <div
        id="value-container"
        className="d-flex text-center align-items-center justify-content-center"
        style={{ width: "100%" }}
      >
        <p className="text-dark" style={{ margin: 0 }}>
          {fromCurrency} to {toCurrency}:{" "}
          {conversionRate
            ? (Number(amount) * conversionRate).toFixed(2)
            : "Fetching..."}
        </p>
      </div>

      <div
        id="currency-input"
        className="d-flex justify-content-center align-items-center gap-3 p-5"
        style={{ width: "100%", height: "60%" }}
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
            onChange={handleAmountChange}
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
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="dropdown-menu"
                style={{
                  display: "block",
                  maxHeight: "150px",
                  overflowY: "auto",
                  position: "absolute",
                  zIndex: 1,
                }}
              >
                {filteredCurrencies.map((currency, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleCurrencySelect(currency, true)}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left-right" />
          </button>

          <div className="input-group align-items-start">
            <input
              type="text"
              className="form-control"
              placeholder="To"
              value={toCurrency}
              onChange={handleToCurrencyChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="dropdown-menu"
                style={{
                  display: "block",
                  maxHeight: "150px",
                  overflowY: "auto",
                  position: "absolute",
                  zIndex: 1,
                }}
              >
                {filteredCurrencies.map((currency, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleCurrencySelect(currency, false)}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}

export default UI;
