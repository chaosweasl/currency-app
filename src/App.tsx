import { useState } from "react";

function App() {
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const currencies = ["USD", "EUR", "JPY", "RON", "RUB"];
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    RON: "lei ",
    RUB: "₽",
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div
          className="bg-primary rounded-circle"
          style={{ width: "2000px", height: "1500px" }}
        ></div>
      </div>

      <div id="title" className="text-center m-4">
        <h1>Currency Exchange</h1>
      </div>

      {/* <div className="input-group mb-3">
        <span className="input-group-text">
          {currencySymbols[currentCurrency]}
        </span>
        <input type="text" className="form-control" placeholder="Username" />
      </div>

      <div className="container d-flex flex-column justify-content-center mt-4 w-50">
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            {currentCurrency}
          </button>
          <ul className="dropdown-menu overflow-auto">
            {currencies.map((currency) => (
              <li key={currency}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCurrentCurrency(currency)}
                >
                  {currency}
                </a>
              </li>
            ))}
          </ul>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the amount here..."
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
