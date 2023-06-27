import React from "react";
import { withRouter } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default withRouter(DefaultLayout);