import Sidebar from "../sidebar";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <main className={styles.wrapper}>
        <Sidebar />
      <div>for everyother content</div>
    </main>
  );
};

export default DashboardLayout;
