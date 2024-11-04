import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface SubscriptionFormStateSlice {
  plan?: number;
  addOns?: number[];
  cardDetails: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

const name = "subscriptionForm";

export const subscriptionFormSlice = createSlice({
  name,
  initialState: {} as SubscriptionFormStateSlice,
  reducers: {
    setSubscriptionFormState: (
      state,
      action: PayloadAction<Partial<SubscriptionFormStateSlice>>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSubscriptionFormState } = subscriptionFormSlice.actions;

const persistedReducer = persistReducer(
  { key: name, storage: storage },
  subscriptionFormSlice.reducer
);

export default persistedReducer;
