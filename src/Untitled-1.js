<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container py-2">
  <a className="navbar-brand" href="/">Waleedcodes</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* means */}
  <div className="collapse navbar-collapse align-middle" id="navbarNav">
    <ul className="navbar-nav ms-auto nav_ul align-items-center">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact Us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </li>
      <div className="mx-3">
        <button type="button" className="btn1 mx-2">Login</button>
        <button type="button" className="btn2 mx-2">Sign Up</button>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </ul>
  </div>
  {/* end */}
</div>
</nav>