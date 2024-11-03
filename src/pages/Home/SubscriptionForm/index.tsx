import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const SubscriptionForm = ({ extractFields }: Props) => {
  // useEffect(() => {
  //   return () => {
  //     extractFields({});
  //   };
  // }, []);

  return (
    <>
      <div className="py-4 pb-2">
        <h2>Subscription plan</h2>
        <p>Select the ideal subscription plan for your listing</p>
      </div>
      <div></div>
    </>
  );
};

export default SubscriptionForm;
