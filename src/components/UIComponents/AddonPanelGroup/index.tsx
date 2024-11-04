import React, { useEffect, useState } from "react";

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
  activePanels?: number[];
  onPanelChange?: (panels: number[]) => void;
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
  activePanels: activePanelsFromProps,
}) => {
  const [activePanels, setActivePanels] = useState<number[]>([]);

  useEffect(() => {
    if (activePanelsFromProps) setActivePanels(activePanelsFromProps);
  }, [activePanelsFromProps]);

  const onPanelChange = (index: number) => {
    if (activePanels.includes(index)) {
      setActivePanels((tmpActivePanels) => {
        const newActivePanels = tmpActivePanels.filter(
          (panel) => panel !== index
        );

        if (onPanelChangeFromProps) onPanelChangeFromProps(newActivePanels);
        return newActivePanels;
      });

      return;
    }

    setActivePanels((tmpActivePanels) => {
      const newActivePanels = [...tmpActivePanels, index];

      if (onPanelChangeFromProps) onPanelChangeFromProps(newActivePanels);
      return newActivePanels;
    });
  };

  if (!Array.isArray(children)) {
    children = [children];
  }

  return (
    <div className={styles.panelsContainer}>
      {children.map(({ props }, index) => {
        const isPanelActive = activePanels.includes(index);
        return (
          <Panel
            {...props}
            onClick={() => onPanelChange(index)}
            isActive={isPanelActive}
            key={`${index}-${props.title}`}
          />
        );
      })}
    </div>
  );
};

// Define the Pane subcomponent
AddonPanelGroup.Panel = Panel;

export default AddonPanelGroup;
