import { NavLink } from "react-router";
import DashboardLayout from "../component/dashboardLayout";
import Suggestion from "../component/suggestion";

// import styled from "styled-components";

// export const Button = styled.button`
//   color: gold;
//   background-color: ${props => props?.variant === "secondary" ? 'purple': 'blue'};
//   padding: 10px 18px;
//   box-sizing: border-box;
//   margin-top: 20px;
//   display: block;
//   border-radius: 10px;

// `

const HomePage = () => {
  return (
    <div>
      <DashboardLayout>
        <div>
          <Suggestion />
        </div>
        <div className="mt-[49px]">
          <Suggestion variant="square" label="Made for Harvey Marjoram" />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default HomePage;
