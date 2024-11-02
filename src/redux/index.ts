import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof setupStore>;

export default store;
