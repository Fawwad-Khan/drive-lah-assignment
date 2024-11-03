import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import React, { useState, ReactNode, useEffect } from "react";
import styles from "./Tabs.module.scss";

type TabPaneProps = {
  title: string;
  children: ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabPaneProps>[];
  activeTab?: number;
};

interface TabsComponent extends React.FC<TabsProps> {
  Pane: React.FC<TabPaneProps>;
}

const Tabs: TabsComponent = ({ children, activeTab: activeTabFromProps }) => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  useEffect(() => {
    if (activeTabFromProps) {
      setActiveTab(activeTabFromProps);
    }
  }, [activeTabFromProps]);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsMenu}>
        {children.map((child, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabItem} ${
              index === activeTab ? styles.active : ""
            }
            ${index < activeTab ? styles.completed : ""}
            `}
          >
            {child.props.title}
            <span className={styles.tick}>
              <FontAwesomeIcon icon={faCheckCircle} color="#026786" />
            </span>
          </div>
        ))}
      </div>
      <div className={styles.tabsSelectMenu}>
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(Number(e.target.value))}
        >
          {children.map((child, index) => (
            <option key={index} value={index}>
              {child.props.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.tabsContent}>{children[activeTab]}</div>
    </div>
  );
};

// Define the Pane subcomponent
Tabs.Pane = ({ children }) => {
  return <div className="tab-pane mx-4">{children}</div>;
};

export default Tabs;
