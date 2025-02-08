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
      <div
        id="title"
        className="text-center m-4 text-white d-flex 
        justify-content-center align-items-center"
        style={{
          height: "20vh",
          transform: "translateY(50%)",
          flexDirection: "column",
        }}
      >
        <h1 className="text-custom-title">
          Currency Exchange Application with APIs
        </h1>
        <p className="text-custom-grey">
          An application made in{" "}
          <img
            src="src/assets/react.svg"
            style={{ width: "25px", height: "25px" }}
          ></img>
          <code style={{ color: "#75aaff" }}>React</code> using{" "}
          <img
            src="src/assets/bootstrap.svg"
            style={{ width: "30px", height: "25px" }}
          ></img>
          <code>Bootstrap</code> by yours truly :)
        </p>
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
