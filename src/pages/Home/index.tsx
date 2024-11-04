import { Suspense } from "react";
import Button from "../../components/UIComponents/Button";
import Tabs from "../../components/UIComponents/Tabs";

import styles from "./styles.module.scss";
import { useHome } from "./useHome";

const Home = () => {
  const {
    activeTab,
    tabList,
    onTabChange,
    onSubmit,
    onNext,
    bindData,
    IsLastTab,
  } = useHome();

  return (
    <div className={styles.container}>
      <Tabs activeTab={activeTab} onTabChange={onTabChange}>
        {tabList.map((tab, index) => (
          <Tabs.Pane title={tab.title} key={index}>
            <Suspense fallback={<div>Loading...</div>}>
              <tab.component bindData={bindData} />
            </Suspense>
          </Tabs.Pane>
        ))}
      </Tabs>
      <div className={styles.footer}>
        <div>
          <Button onClick={IsLastTab ? onSubmit : onNext}>
            {IsLastTab ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
