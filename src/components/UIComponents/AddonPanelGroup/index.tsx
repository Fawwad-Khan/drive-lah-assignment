import React, { useState } from "react";

import styles from "./AddonPanelGroup.module.scss";

type AddonPanelProps = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

type AddonPanelGroupProps = {
  children:
    | React.ReactElement<AddonPanelProps>[]
    | React.ReactElement<AddonPanelProps>;
  activePanel?: number;
  onPanelChange?: (index?: number) => void;
};

interface AddonPanelGroupComponent extends React.FC<AddonPanelGroupProps> {
  Panel: React.FC<AddonPanelProps>;
}

const Panel = ({ title, isActive, onClick }: AddonPanelProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.panel} ${isActive ? styles.active : ""}`}
    >
      <h5>
        {title}
        <div
          className={`${styles.checkMark} ${isActive ? styles.active : ""}`}
        />
      </h5>
    </div>
  );
};

const AddonPanelGroup: AddonPanelGroupComponent = ({
  children,
  onPanelChange: onPanelChangeFromProps,
}) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined); // Track active tab index

  const onPanelChange = (index: number) => {
    if (index === activeTab) {
      setActiveTab(undefined);
      if (onPanelChangeFromProps) onPanelChangeFromProps(undefined);

      return;
    }
    setActiveTab(index);
    if (onPanelChangeFromProps) onPanelChangeFromProps(index);
  };

  if (!Array.isArray(children)) {
    children = [children];
  }

  return (
    <div className={styles.panelsContainer}>
      {children.map(({ props }, index) => (
        <Panel
          {...props}
          onClick={() => onPanelChange(index)}
          isActive={activeTab === index}
          key={`${index}-${props.title}`}
        />
      ))}
    </div>
  );
};

// Define the Pane subcomponent
AddonPanelGroup.Panel = Panel;

export default AddonPanelGroup;
