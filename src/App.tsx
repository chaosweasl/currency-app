import { useState } from "react";

function App() {
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const currencies = ["USD", "EUR", "JPY", "RON"];

  return (
    <>
      <div id="title" className="text-center m-4">
        <h1>Currency Exchange</h1>
      </div>

      <div className="container mt-4">
        {/*input group with dropdown box*/}
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
          <input type="text" className="form-control" />
        </div>
      </div>
    </>
  );
}

export default App;
