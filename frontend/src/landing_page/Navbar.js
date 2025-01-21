import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import server_url from "../environment";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      // console.log(cookies.token);
      if ( cookies.token === undefined ) {
        navigate("/");
      }
      const { data } = await axios.post(
        `${server_url}/login`,
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
        position: "top-right",
        })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies]);
  const Logout = () => {
    // console.log("removing token", cookies.token);
    cookies.token = undefined;
    removeCookie("token");
    navigate("/");
    // verifyCookie();
  };
  return (<>
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {cookies.token == undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login" >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                // **Show Logout when token.value is present**
                <li className="nav-item">
                  <button className="nav-link active" onClick={Logout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
    <ToastContainer/>
    </>
  );
}

export default Navbar;
