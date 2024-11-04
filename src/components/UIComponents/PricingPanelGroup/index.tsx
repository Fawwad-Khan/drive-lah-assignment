import React, { useState } from "react";

import speedoMeter from "../../../assets/speedometer.svg";
import mapMarker from "../../../assets/mapMarker.svg";
import lock from "../../../assets/Lock.svg";

import styles from "./PricingPanelGroup.module.scss";

type PricingPanelProps = {
  title: string;
  gps: string;
  mileage: string;
  keyAccess: string;
  price?: number;
  isActive?: boolean;
  onClick?: () => void;
};

type PricingPanelGroupProps = {
  children:
    | React.ReactElement<PricingPanelProps>[]
    | React.ReactElement<PricingPanelProps>;
  activePanel?: number;
  onPanelChange?: (index?: number) => void;
};

interface PricingPanelGroupComponent extends React.FC<PricingPanelGroupProps> {
  Panel: React.FC<PricingPanelProps>;
}

const Panel = ({
  title,
  gps,
  mileage,
  keyAccess,

  price,
  isActive,
  onClick,
}: PricingPanelProps) => {
  const renderPrice = () => {
    if (price) {
      return (
        <>
          <strong>${price}</strong>
          <span>/month</span>
        </>
      );
    }

    return <strong>Free</strong>;
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.panel} ${isActive ? styles.active : ""}`}
    >
      <h5>{title}</h5>
      <div className="py-2">
        <div className={styles.panelText}>
          <img src={mapMarker} alt="mapMarker" />
          <span>{gps}</span>
        </div>
        <div className={styles.panelText}>
          <img src={speedoMeter} alt="speedometer" />
          <span>{mileage}</span>
        </div>
        <div className={styles.panelText}>
          <img src={lock} alt="lock" />
          <span>{keyAccess}</span>
        </div>
      </div>
      <h5 className={styles.price}>{renderPrice()}</h5>
    </div>
  );
};

const PricingPanelGroup: PricingPanelGroupComponent = ({
  children,
  onPanelChange: onPanelChangeFromProps,
  activePanel,
}) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined); // Track active tab index

  React.useEffect(() => {
    if (activePanel !== undefined) {
      setActiveTab(activePanel);
    }
  }, [activePanel]);

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
PricingPanelGroup.Panel = Panel;

export default PricingPanelGroup;
