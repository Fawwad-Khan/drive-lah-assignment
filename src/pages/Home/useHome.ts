import { lazy, useState } from "react";
import store from "../../redux";

export const useHome = () => {
  const [activeTab, setActiveTab] = useState<number>(8);

  const onNext = () => {
    setActiveTab((tmpActiveTab: number) => tmpActiveTab + 1);
  };

  const onTabChange = (index: number) => {
    setActiveTab(index);
  };

  const onSubmit = () => {
    console.log("Submit", store.getState());
  };

  const tabList: {
    title: string;
    component: React.FC;
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

  const IsLastTab = activeTab === tabList.length - 1;

  return {
    activeTab,
    onNext,
    onTabChange,
    onSubmit,
    tabList,
    IsLastTab,
  };
};
