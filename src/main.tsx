import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import store, { persistedStore } from "./redux/index.ts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>...loading</>} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
