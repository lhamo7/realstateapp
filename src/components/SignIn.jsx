import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import arrowIcon from "../assets/keyboardArrowRightIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const { email, password } = data;
  // toast("Wow so easy!");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("user logged in");
      navigate("/profile");
    } catch (error) {
      toast.error("error");
    }
  }
  function handleChange(e) {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <div className={styles.signInForm}>
        <h1> Welcome Back !</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            onChange={handleChange}
            className={styles.passwordInput}
            type="password"
            name="password"
            placeholder="password"
          />
          <button>submit</button>
        </form>
        <h3 className={styles.forgotPass}> Forgot Password </h3>
        <h2 style={{ marginRight: "10%" }}>
          Sign In &nbsp;
          <img className={styles.arrowColor} src={arrowIcon} />
        </h2>
      </div>
    </>
  );
}

export default SignIn;
