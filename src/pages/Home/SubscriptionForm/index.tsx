import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const SubscriptionForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>SubscriptionForm</div>;
};

export default SubscriptionForm;
