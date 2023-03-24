import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import SplashScreen from "../src/pages/SplashScreen";
import SelectCrop from "../src/pages/SelectCrop";
import NavBar from "../src/components/NavBar";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  return (
    <div>
      <Router>
        <NavBar setStoredToken={setStoredToken} />
        <Routes>
          {storedToken ? (
            <>
              <Route
                path="/"
                element={<Home setStoredToken={setStoredToken} />}
              />
              <Route
                path="/SelectCrop"
                element={<SelectCrop setStoredToken={setStoredToken} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<SplashScreen setStoredToken={setStoredToken} />}
              />

              <Route
                path="/signup"
                element={<SignUp setStoredToken={setStoredToken} />}
              />
              <Route
                path="/login"
                element={<Login setStoredToken={setStoredToken} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
