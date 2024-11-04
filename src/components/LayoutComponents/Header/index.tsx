import { useState } from "react";

import styles from "./header.module.scss";
import logo from "../../../assets/drivelahLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.caret} onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.logo}>
        <img src={logo} height={27} />
      </div>

      <div className={`${styles.menu} ${showMenu ? styles.active : ""}`}>
        <div>Learn More</div>
        <div>List your car</div>
        <div>Inbox</div>
        <div className={styles.avatarInMenu}>
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>

      <div className={styles.avatarOut}>
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </div>
  );
};

export default Header;
