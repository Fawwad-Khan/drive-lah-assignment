import Button from "../../components/UIComponents/Button";
import Tabs from "../../components/UIComponents/Tabs";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div>
      <Tabs>
        <Tabs.Pane title="Tab 1">Tab 1 Content</Tabs.Pane>
        <Tabs.Pane title="Tab 2">Tab 2 Content</Tabs.Pane>
        <Tabs.Pane title="Tab 3">Tab 3 Content</Tabs.Pane>
      </Tabs>
      <div className={styles.footer}>
        <div>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
