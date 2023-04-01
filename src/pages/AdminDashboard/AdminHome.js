import React from "react";
import RadarChart from "../../components/Admin/RadarChart";
import LineChart from "../../components/Admin/LineChart";
import AreaChart from "../../components/Admin/AreaChart";
import VerticalBar from "../../components/Admin/VerticalBar";
function AdminHome() {
  return (
    <div className="pt-24">
      <h1 className="text-[#3B841F] text-center font-bold text-5xl my-4">
        See Data Analytics
      </h1>

      <p className="edunswact text-center text-2xl">
        Analyse the flow of data in the system
      </p>
      <div className="grid mx-auto px-8    md:grid-cols-2 md:gap-10 gap-4 grid-cols-1">
        <div className="md:h-[500px] h-[300px]  ">
          <RadarChart />
        </div>
        <div className="md:h-[500px] h-[300px]  ">
          <LineChart />
        </div>
        <div className="md:h-[500px] h-[300px]  ">
          <AreaChart />
        </div>
        <div className="md:h-[500px] h-[300px]  ">
          <VerticalBar />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
