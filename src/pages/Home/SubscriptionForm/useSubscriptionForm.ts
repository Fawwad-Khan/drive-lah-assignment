import { useEffect, useState } from "react";

type Props = {
  bindData: (data: () => unknown) => void;
};

export const useSubscriptionForm = ({ bindData }: Props) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<number | undefined>(
    undefined
  );
  const [activeAddOns, setActiveAddOns] = useState<number[]>([]);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    bindData(() => ({ subscriptionPlan, activeAddOns, cardDetails }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscriptionPlan, activeAddOns, cardDetails]);

  const onPanelChange = (index?: number) => {
    setSubscriptionPlan(index);
  };

  return {
    onPanelChange,
    setActiveAddOns,
    setCardDetails,

    // Data
    subscriptionPlan,
    activeAddOns,
    cardDetails,
  };
};
