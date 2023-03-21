import React from "react";
import { Link } from "react-router-dom";
const SplashScreen = () => {
  return (
    <div>
      This is what you see before you log in.
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SplashScreen;
