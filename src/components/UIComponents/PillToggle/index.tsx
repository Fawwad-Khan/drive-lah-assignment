import React, { useState } from "react";
import styles from "./PillToggle.module.scss";

type PillToggleProps = {
  onToggle?: (isOn: boolean) => void;
};

const PillToggle: React.FC<PillToggleProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    if (onToggle) onToggle(!isOn);
  };

  return (
    <div
      className={`${styles.pillToggle} ${isOn ? styles.on : styles.off}`}
      onClick={handleToggle}
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default PillToggle;
