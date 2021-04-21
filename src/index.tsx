import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import App from "./components/app/app";
import store from "./store";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default registerRootComponent(Root);
