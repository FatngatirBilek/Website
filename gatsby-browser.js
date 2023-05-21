import PropTypes from "prop-types";
import React from "react";

import "./src/css/animate.css";
import "./src/css/global.css";
import "./src/css/tailwind.css";

import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
