import { NavLink } from "react-router";
import DashboardLayout from "../component/dashboardLayout";

const HomePage = () => {
  return (
    <div>
      <DashboardLayout>
          <div style={{color: 'white'}}>This is the home page</div>
      </DashboardLayout>
    </div>
  );
};

export default HomePage;
