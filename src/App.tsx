function App() {
  return (
    <>
      <div 
        id="title"
        className="text-center m-4">
        <h1>Currency Exchange</h1>
      </div>

      <div className="container mt-4">
      {/* First Input Group with Dropdown */}
      <div className="input-group mb-2">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu overflow-auto">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
      </div>

      {/* Second Input Group with Segmented Dropdown */}
      <div className="input-group">
        <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
        <button type="button" className="btn btn-outline-secondary">Action</button>
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
)}

export default App
