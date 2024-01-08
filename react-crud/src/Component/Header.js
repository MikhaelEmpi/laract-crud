import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-light">
            Laract CRUD Mahasiswa
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-light" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mahasiswalist" className="nav-link text-light">
                  {" "}
                  Mahasiswa List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addmahasiswa" className="nav-link text-light">
                  Add Mahasiswa
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Header;
