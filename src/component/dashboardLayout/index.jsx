import Sidebar from "../sidebar";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = ({ children }) => {


  return (
    <main className={styles.container}>
      <Sidebar />
      <div>{children}</div>
    </main>
  );

  
};

export default DashboardLayout;
