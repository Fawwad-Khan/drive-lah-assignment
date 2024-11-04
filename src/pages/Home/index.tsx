import { lazy, Suspense, useState } from "react";
import Button from "../../components/UIComponents/Button";
import Tabs from "../../components/UIComponents/Tabs";

import styles from "./styles.module.scss";

const Home = () => {
  const [activeTab, setActiveTab] = useState<number>(8);
  const [formData, setFormData] = useState<{ [key: string]: unknown }>({});
  let extractFields: () => unknown;

  const onNext = () => {
    const data = extractFields();

    const key = tabList[activeTab].title;
    setFormData((prevData) => ({ ...prevData, [key]: data }));

    setActiveTab((tmpActiveTab: number) => tmpActiveTab + 1);
  };

  const onTabChange = (index: number) => {
    console.log("fawwad im changing ");
    setActiveTab(index);
  };

  const onSubmit = () => {
    console.log("Final Data", formData);
  };

  const tabList: {
    title: string;
    component: React.FC<{ bindData: (data: () => unknown) => void }>;
  }[] = [
    {
      title: "Location",
      component: lazy(() => import("./LocationForm")),
    },
    {
      title: "About",
      component: lazy(() => import("./AboutForm")),
    },
    {
      title: "Features",
      component: lazy(() => import("./FeaturesForm")),
    },
    {
      title: "Rules",
      component: lazy(() => import("./RulesForm")),
    },
    {
      title: "Pricing",
      component: lazy(() => import("./PricingForm")),
    },
    {
      title: "Promotion",
      component: lazy(() => import("./PromotionForm")),
    },
    {
      title: "Pictures",
      component: lazy(() => import("./PicturesForm")),
    },
    {
      title: "Insurance",
      component: lazy(() => import("./InsuranceForm")),
    },
    {
      title: "Subscription",
      component: lazy(() => import("./SubscriptionForm")),
    },
    {
      title: "Device",
      component: lazy(() => import("./DeviceForm")),
    },
    {
      title: "EasyAccess",
      component: lazy(() => import("./EasyAccessForm")),
    },
  ];

  const bindData = (data: () => unknown) => {
    extractFields = data;
  };

  const IsLastTab = activeTab === tabList.length - 1;

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
