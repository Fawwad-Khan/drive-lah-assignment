import { useAppDispatch, useAppSelector } from "../../../redux";
import { setSubscriptionFormState } from "../../../redux/SubscriptionForm/subsctiptionForm.slice";

export const useSubscriptionForm = () => {
  const dispatch = useAppDispatch();

  const {
    plan: subscriptionPlan,
    addOns: activeAddOns,
    cardDetails,
  } = useAppSelector((state) => state.subscriptionForm);

  const onSubscriptionPanelChange = (index?: number) => {
    dispatch(setSubscriptionFormState({ plan: index }));
  };

  const onAddonsPanelChange = (indexes: number[]) => {
    dispatch(setSubscriptionFormState({ addOns: indexes }));
  };

  const onCardDetailsChange = (data: typeof cardDetails) => {
    dispatch(setSubscriptionFormState({ cardDetails: data }));
  };

  return {
    onSubscriptionPanelChange,
    onAddonsPanelChange,
    onCardDetailsChange,

    // Data
    subscriptionPlan,
    activeAddOns,
    cardDetails,
  };
};
