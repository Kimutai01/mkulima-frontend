import React, { useState, useEffect } from "react";

const MySupplies = ({ loggedInUserId }) => {
  const [mySupplies, setMySupplies] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/my_supplies/${loggedInUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setMySupplies(data);
      });
  }, [loggedInUserId]);

  return (
    <div className="pt-24">
      MySupplies
      {mySupplies.map((supply) => (
        <div>
          <p>{supply.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MySupplies;
