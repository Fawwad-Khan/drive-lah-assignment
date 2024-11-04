import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./rootReducer";
import { persistStore } from "redux-persist";
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

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

export const persistedStore = persistStore(store);

export const useAppSelector: TypedUseSelectorHook<RootState> = (rest) =>
  useSelector(rest, { equalityFn: shallowEqual });

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
