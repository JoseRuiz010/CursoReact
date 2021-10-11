import React from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { store } from "./store/store";

export const JournalApp = () => {
  return (
    <div>
       <Provider store={store}>
          <AppRoutes/>
      </Provider>
    </div>
  );
};
