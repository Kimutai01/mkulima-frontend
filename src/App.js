import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Farmer/Home";
import SupplierHome from "./pages/Supplier/SupplierHome";
import AddSuppliedInput from "./pages/Supplier/AddSuppliedInput";
import SupplierNavBar from "./components/Navbars/SupplierNavBar";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import SplashScreen from "../src/pages/SplashScreen";
import SelectCrop from "./pages/Farmer/SelectCrop";
import FarmerNavBar from "./components/Navbars/FarmerNavBar";
import MySupplies from "./pages/Supplier/MySupplies";
import EachOfBestCropToGrow from "./pages/Farmer/EachOfBestCropToGrow";
import MySelectedCrops from "./pages/Farmer/MySelectedCrops";
import EachOfMySelectedCrop from "./pages/Farmer/EachOfMySelectedCrop";
import AddProductsForSale from "./pages/Farmer/AddProductsForSale";
import MySoldProducts from "./pages/Farmer/MySoldProducts";
import ProduceBuyerHome from "./pages/ProduceBuyer/ProduceBuyerHome";
import AllProducts from "./pages/ProduceBuyer/AllProducts";
import ProduceBuyerNavbar from "./components/Navbars/ProduceBuyerNavbar";
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
        {storedToken && (
          <>
            {loggedInUserRole === "farmer" && (
              <FarmerNavBar setStoredToken={setStoredToken} />
            )}
            {loggedInUserRole === "supplier" && (
              <SupplierNavBar setStoredToken={setStoredToken} />
            )}
            {loggedInUserRole === "produce_buyer" && (
              <ProduceBuyerNavbar setStoredToken={setStoredToken} />
            )}
          </>
        )}
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

              {loggedInUserRole === "produce_buyer" && (
                <Route
                  path="/"
                  element={<ProduceBuyerHome setStoredToken={setStoredToken} />}
                />
              )}
              <Route
                path="/SelectCrop"
                element={<SelectCrop setStoredToken={setStoredToken} />}
              />
              <Route
                path="/MySelectedCrops"
                element={<MySelectedCrops loggedInUserId={loggedInUserId} />}
              />
              <Route
                path="/EachOfMySelectedCrop/:id"
                element={<EachOfMySelectedCrop />}
              />

              <Route
                path="/MySupplies"
                element={<MySupplies loggedInUserId={loggedInUserId} />}
              />
              <Route
                path="/MySoldProducts"
                element={<MySoldProducts loggedInUserId={loggedInUserId} />}
              />
              <Route
                path="/AddSuppliedInput"
                element={<AddSuppliedInput loggedInUserId={loggedInUserId} />}
              />
              <Route
                path="/EachOfBestCropToGrow/:id"
                element={
                  <EachOfBestCropToGrow loggedInUserId={loggedInUserId} />
                }
              />
              <Route
                path="/AddProductsForSale"
                element={<AddProductsForSale loggedInUserId={loggedInUserId} />}
              />

              <Route
                path="/AllProducts"
                element={<AllProducts loggedInUserId={loggedInUserId} />}
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
