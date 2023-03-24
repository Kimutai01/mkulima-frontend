import React from "react";

import Maps from "../../components/Farmer/Maps";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="pt-24">
      <Maps />
      <Link to="/SelectCrop">Select Crop</Link>
    </div>
  );
}

export default Home;
