import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        <a className="navbar-brand" href="/home">
          <img src="media/images/logo.svg" style={{ width: "30%" }} alt="logo" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><Link className="nav-link ms-2 active" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link ms-2 active" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link ms-2 active" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link ms-2 active" to="/support">Support</Link></li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link ms-2 text-muted">Hi, {username}</span>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary ms-2" href="https://zerodha-clone-rrw7.vercel.app" target="_blank" rel="noreferrer">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link ms-2 active" to="/signup">Signup</Link></li>
                <li className="nav-item">
                  <Link className="btn btn-primary ms-2" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;