"use client";

import React from "react";
import { store } from "./store.js";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export { Providers };
