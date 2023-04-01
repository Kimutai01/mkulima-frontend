import React from "react";
import ApproveInputs from "../../components/Admin/ApproveInputs";
import ApproveSoldProducts from "../../components/Admin/ApproveSoldProducts";
import ApproveAnimalFeeds from "../../components/Admin/ApproveAnimalFeeds";
const Approve = () => {
  return (
    <div className="pt-24">
      <ApproveInputs />
      <ApproveSoldProducts />
      <ApproveAnimalFeeds />
    </div>
  );
};

export default Approve;
