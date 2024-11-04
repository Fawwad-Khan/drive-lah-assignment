import { combineReducers } from "redux";
import deviceFormReducer from "./DeviceForm/deviceForm.slice";
import subscriptionFormReducer from "./SubscriptionForm/subsctiptionForm.slice";

const rootReducer = combineReducers({
  deviceForm: deviceFormReducer,
  subscriptionForm: subscriptionFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
