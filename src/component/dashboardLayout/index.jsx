import Sidebar from "../sidebar";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = ({ children }) => {


  return (
    <main className={styles.container}>
      <Sidebar />
      <div className="py-[47px] px-[50px] w-full  h-full overflow-scroll">{children}</div>
    </main>
  );

  
};

export default DashboardLayout;
