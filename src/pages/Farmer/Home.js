import React from "react";

import Maps from "../../components/Farmer/Maps";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="pt-24">
      <Maps />
      <p>
        Show the farmer how the site will help them , grow plants , connect them
        to suppliers , sell their produce and reduce post harvest losses by
        selling low quality produce to the market to livestock farmers for
        animal feeds
      </p>
      <button className="bg-red-500 p-4 mt-12">
        <Link to="/SelectCrop">Select Crop</Link>
      </button>
    </div>
  );
}

export default Home;
