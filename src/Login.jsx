import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import {
  signInAuthUserWithEmailAndPassword,
  signUpAuthUserWithEmailAndPassword,
} from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      ).then((auth) => {
        navigate("/");
      });
      console.log(response);
    } catch (error) {
      alert(error.code);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await signUpAuthUserWithEmailAndPassword(
        email,
        password
      ).then((auth) => {
        navigate("/");
      });
      console.log(response);
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={(e) => signIn(e)}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={(e) => register(e)}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
