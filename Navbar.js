import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {

  handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">

          <NavLink className="navbar-brand me-4 fs-1 fst-italic" to="/">
            Food Delivery
          </NavLink>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {localStorage.getItem("authToken") && (
              <li className="nav-item me-4">
                <NavLink className="nav-link" to="/myorders">
                  My Orders
                </NavLink>
              </li>
            )}
          </ul>

          <div className="d-flex gap-2 align-items-center">
            {!localStorage.getItem("authToken") ? (
              <>
                <NavLink className="btn bg-light text-success" to="/login">
                  Login
                </NavLink>
                <NavLink className="btn bg-light text-success" to="/createuser">
                  SignUp
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="btn bg-light text-success position-relative"
                  to="/cart"
                >
                  My Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </NavLink>

                <button
                  className="btn bg-light text-danger"
                  onClick={this.handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </nav>
    );
  }
}

export default Navbar;
