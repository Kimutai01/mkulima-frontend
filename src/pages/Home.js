import React, { useEffect, useState } from "react";

import Maps from "../components/Maps";
import { Link } from "react-router-dom";
function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setName(data.user.username));
  }, []);

  return (
    <div className="pt-24">
      <Maps />
      <Link to="/SelectCrop">Select Crop</Link>
    </div>
  );
}

export default Home;
