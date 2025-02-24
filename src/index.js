import React from "react";
import ReactDOM from "react-dom";
import HelpWidget from "./HelpWidget";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

const Index = () => {
  return (
    <ErrorBoundary>
      <HelpWidget />
    </ErrorBoundary>
  );
};

window.onload = function () {
  const container = document.createElement("div");
  container.id = "help-widget-container";
  document.body.appendChild(container);
  ReactDOM.render(<Index />, container);
};
