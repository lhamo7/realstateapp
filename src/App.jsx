import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import Explore from "./components/Explore";
import ForgotPassword from "./components/ForgotPassword";
import Offers from "./components/Offers";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


function App() {
  return (<>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Explore/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile" element={<Profile/>} />
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
