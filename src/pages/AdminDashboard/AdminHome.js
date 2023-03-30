import PieChart from "./PieChart";
import LineChart from "./LineChart";
import VerticalBar from "./VerticalBar";
import AreaChart from "./AreaChart";
function AdminHome() {
  return (
    <div className="grid mx-auto px-8  pt-24  md:grid-cols-2 md:gap-10 gap-4 grid-cols-1">
      <div className="md:h-[500px] h-[300px]  ">
        <PieChart />
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
  );
}

export default AdminHome;
