import React, { useState, ReactNode } from "react";
import styles from "./Tabs.module.scss";

type TabPaneProps = {
  title: string;
  children: ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabPaneProps>[];
};

interface TabsComponent extends React.FC<TabsProps> {
  Pane: React.FC<TabPaneProps>;
}

const Tabs: TabsComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsMenu}>
        {children.map((child, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabItem} ${
              index === activeTab ? styles.active : ""
            }`}
          >
            {child.props.title}
            {index < activeTab && <span className={styles.tick}>✓</span>}
          </div>
        ))}
      </div>
      <div className={styles.tabsContent}>{children[activeTab]}</div>
    </div>
  );
};

// Define the Pane subcomponent
Tabs.Pane = ({ children }) => {
  return <div className="tab-pane">{children}</div>;
};

export default Tabs;
