import React from "react";
import styles from "./SignUp.module.css";
import arrowIcon from "../assets/keyboardArrowRightIcon.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const { email, password } = data;
  console.log(email, password);
  async function dataSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      // console.log(e);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("error");
    }

    // const user =userCredential.user
  }

  function handleChange(e) {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(e.target.name);
  }
  return (
    <div className={styles.signUpForm}>
      <h1> Welcome Back !</h1>
      <form onSubmit={dataSubmit}>
        {/* <input
          className={styles.nameInput}
          type="text"
          name="name"
          placeholder="name"
        /> */}
        <input
          className={styles.emailInput}
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className={styles.passwordInput}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <h3 className={styles.forgotPass}> Forgot Password </h3>
      <h2 style={{ marginRight: "10%" }}>
        Sign Up &nbsp;
        <img className={styles.arrowColor} src={arrowIcon} />
      </h2>
    </div>
  );
}

export default SignUp;

// array destruturing
// object
// spread operator
