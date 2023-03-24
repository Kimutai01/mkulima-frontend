import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Farmer/Home";
import SupplierHome from "./pages/Supplier/SupplierHome";
import AddSuppliedInput from "./pages/Supplier/AddSuppliedInput";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import SplashScreen from "../src/pages/SplashScreen";
import SelectCrop from "./pages/Farmer/SelectCrop";
import NavBar from "../src/components/NavBar";

function App() {
  const [loggedInUserRole, setLoggedInUserRole] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedInUserRole(data.user.role);
        setLoggedInUserId(data.user.id);
      });
  }, [storedToken]);

  return (
    <div>
      <Router>
        <NavBar setStoredToken={setStoredToken} />
        <Routes>
          {storedToken ? (
            <>
              {loggedInUserRole === "farmer" && (
                <Route
                  path="/"
                  element={<Home setStoredToken={setStoredToken} />}
                />
              )}
              {loggedInUserRole === "supplier" && (
                <Route
                  path="/"
                  element={<SupplierHome setStoredToken={setStoredToken} />}
                />
              )}
              <Route
                path="/SelectCrop"
                element={<SelectCrop setStoredToken={setStoredToken} />}
              />
              <Route
                path="/AddSuppliedInput"
                element={<AddSuppliedInput loggedInUserId={loggedInUserId} />}
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
