import PricingPanelGroup from "../../../components/UIComponents/PricingPanelGroup";
import styles from "./SubscriptionForm.module.scss";
import AddonPanelGroup from "../../../components/UIComponents/AddonPanelGroup";
import CardInput from "../../../components/UIComponents/CardInput";

import {
  subscriptionAddons,
  subscriptionPricePanels,
} from "../../../constants";
import { useSubscriptionForm } from "./useSubscriptionForm";

type Props = {
  bindData: (data: () => unknown) => void;
};

const SubscriptionForm: React.FC<Props> = ({ bindData }) => {
  const {
    subscriptionPlan,
    activeAddOns,
    onPanelChange,
    setActiveAddOns,
    setCardDetails,
  } = useSubscriptionForm({ bindData });

  const renderAddOns = () => {
    if (subscriptionPlan !== undefined) {
      return (
        <div className="py-3">
          <h5 className="subHeading">Select add-ons for your subscription</h5>

          <AddonPanelGroup
            onPanelChange={(indexes) => {
              setActiveAddOns(indexes);
            }}
            activePanels={activeAddOns}
          >
            {subscriptionAddons[subscriptionPlan].map((addOn, index) => {
              return (
                <AddonPanelGroup.Panel
                  key={index}
                  title={addOn.title}
                  isActive={addOn.isActive}
                />
              );
            })}
          </AddonPanelGroup>
        </div>
      );
    }

    return "";
  };

  const renderCardDetails = () => {
    if (subscriptionPlan) {
      return (
        <div className="py-3">
          <h5 className="subHeading">Enter your card details</h5>
          <CardInput
            onChange={(data) => {
              setCardDetails(data);
            }}
          />
          <p className={styles.chargedText}>
            You will not be charged right now. Subscription will only start once
            your listing is published and live
          </p>
        </div>
      );
    }

    return "";
  };

  return (
    <>
      <div className="py-4 pb-2">
        <h2>Subscription plan</h2>
        <p>Select the ideal subscription plan for your listing</p>
      </div>
      <div className="py-3">
        <h5 className="subHeading">Select your plan</h5>
        <PricingPanelGroup onPanelChange={onPanelChange}>
          {subscriptionPricePanels.map((panel, index) => {
            return (
              <PricingPanelGroup.Panel
                title={panel.title}
                gps={panel.gps}
                mileage={panel.mileage}
                keyAccess={panel.keyAccess}
                price={panel.price}
                key={index}
              />
            );
          })}
        </PricingPanelGroup>
      </div>
      {renderAddOns()}
      {renderCardDetails()}
      <div className="py-3">
        <h5 className="pb-2 fw-normal">
          <span className="text-black">Learn more about the plans here - </span>{" "}
          <a href="#">
            <u>What is the right plan for me?</u>
          </a>
        </h5>
        <h5 className="text-black fw-normal">
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </h5>
      </div>
    </>
  );
};

export default SubscriptionForm;
