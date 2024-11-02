import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Header";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.section}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
