import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [forms, setform] = useState(false);
  const [register, setregister] = useState(false);
  const [cart, setcart] = useState(false);
  const location = useLocation();
  const Logs = () => {
    const [log, setlog] = useState({
      user: "",
      pasword: "",
    });

    const changehandler = (e) => {
      setlog({ ...log, [e.target.name]: e.target.value });
    };

    const submithandler = (e) => {
      e.preventDefault();
      console.log(log);
    };
    return (
      <>
        <form onSubmit={submithandler}>
          <div className="form">
            <br></br>
            <div className="mb-3">
              <input
                type="text"
                onChange={changehandler}
                name="user"
                placeholder="enter Valid mobile number"
                className="form-control rounded-0 py-2 fs-5"
              />
            </div>
            <br></br>
            <div className="mb-3">
              <input
                type="password"
                onChange={changehandler}
                name="pasword"
                placeholder="enter pasword"
                className="form-control rounded-0 py-2 fs-5"
              />
            </div>
            <br></br>
            <input type="submit" value="Log in" className="btn btn-primary" />
            <br></br>
            <br></br>
            <br></br>
            <p className="text-primary">Forget pasword</p>
            <p className="text-primary ">Create account</p>
          </div>
        </form>
      </>
    );
  };
  return (

   
     <div>
  {(location.pathname === '/products' || location.pathname === '/about') && (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#" >
          <img
            src="https://img.freepik.com/premium-photo/realistic-organic-certified-label-black-silhouette-white-mask-use_556904-1284.jpg?w=740"
            alt="Logo"
            style={{ width: "80px", height: "80px", marginRight: "10px" }}
          />
          {" "}
          
        </Link>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mx b-lg-0">
                  {/* <li className="nav-item me-2x">
                <Link className="link-secondary me-4 " to="/home">Home</Link>
              </li> */}

                  <li className="nav-item">
                    <Link className="link-secondary me-3" to="/products" style={{fontFamily:"sans-serif", fontWeight: '600'}}>
                      Product
                    </Link>
                  </li>
                  <li className="nav-item" style={{fontFamily:"sans-serif", fontWeight: '600'}}>
                    <Link className="link-secondary me-4" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                <div className="buttons">
                  <button
                    className="btn btn-outline-dark me-2"
                    onClick={() => setform(!forms)}
                  >
                    <i className="fa fa-sign-in me-4"></i>log in
                  </button>
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-outline-dark me-2"
                    onClick={() => setregister(!register)}
                  >
                    <i className="fa fa-sign-in mr-5"></i> Register
                  </button>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => setcart(!cart)}
                    className="btn btn-outline-dark me-2"
                  >
                    <i className="fa-solid fa-cart-arrow-down mr-4"></i>Cart(0)
                  </button>
                </div>
              </div>
            </div>
          </nav>
          )}
    </div>
  );
};
export default Navbar;