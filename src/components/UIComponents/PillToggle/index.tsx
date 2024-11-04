import React, { useEffect, useState } from "react";
import styles from "./PillToggle.module.scss";

type PillToggleProps = {
  onToggle?: (isOn: boolean) => void;
  isOn?: boolean;
  ["data-test-id"]?: string;
};

const PillToggle: React.FC<PillToggleProps> = ({
  onToggle,
  isOn: isOnFromProps,
  ["data-test-id"]: dataTestId,
}) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOnFromProps !== undefined) {
      setIsOn(isOnFromProps);
    }
  }, []);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    if (onToggle) onToggle(!isOn);
  };

  return (
    <div
      className={`${styles.pillToggle} ${isOn ? styles.on : styles.off}`}
      onClick={handleToggle}
      data-test-id={dataTestId}
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default PillToggle;
