import { NavLink } from "react-router";
import DashboardLayout from "../component/dashboardLayout";
import Suggestion from "../component/suggestion";

const HomePage = () => {
  return (
    <div>
      <DashboardLayout>
          <div style={{color: 'white'}}>
              <Suggestion />
          </div>
      </DashboardLayout>
    </div>
  );
};

export default HomePage;
