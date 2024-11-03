import { useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.caret} onClick={() => setShowMenu(!showMenu)}>
        Menu
      </div>
      <div className={`${styles.menu} ${showMenu ? styles.active : ""}`}>
        <div>Learn More</div>
        <div>List your car</div>
        <div>Inbox</div>
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
};

export default Header;
