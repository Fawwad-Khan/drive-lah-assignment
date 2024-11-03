import { useState } from "react";
import PricingPanelGroup from "../../../components/UIComponents/PricingPanelGroup";
import styles from "./SubscriptionForm.module.scss";

type Props = {
  extractFields: (data: unknown) => void;
};

const SubscriptionForm = ({ extractFields }: Props) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<number>(undefined);

  const onPanelChange = (index: number) => {
    setSubscriptionPlan(index);
  };

  console.log("fawwad i have subscriptionPlan", subscriptionPlan);

  return (
    <>
      <div className="py-4 pb-2">
        <h2>Subscription plan</h2>
        <p>Select the ideal subscription plan for your listing</p>
      </div>
      <div className="py-4">
        <h5 className={styles.subHeading}>Select your plan</h5>
        <PricingPanelGroup onPanelChange={onPanelChange}>
          <PricingPanelGroup.Panel
            title="Just mates"
            gps="Bring your own GPS"
            mileage="Mileage reporting to be done by you"
            keyAccess="In-person key handover to guests"
          />
          <PricingPanelGroup.Panel
            title="Good Mates"
            gps="Primary GPS included"
            mileage="Automated mileage calculations"
            keyAccess="In-person key handover to guests"
          />
          <PricingPanelGroup.Panel
            title="Best Mates"
            gps="Keyless access technology"
            mileage="Automated mileage calculations"
            keyAccess="In-person key handover to guests"
          />
        </PricingPanelGroup>
      </div>
      <div className="py-4">
        <h5>
          <span className="text-black">Learn more about the plans here - </span>{" "}
          <a href="#">
            <u>What is the right plan for me?</u>
          </a>
        </h5>
        <h5 className="text-black">
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </h5>
      </div>
    </>
  );
};

export default SubscriptionForm;
