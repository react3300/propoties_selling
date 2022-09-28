import React from "react";
import { Button } from 'antd';
import PropTypes from "prop-types";

import styles from "./ButtonControl.scss";

export const PrimaryButton = (props) => {
  const { children, className } = props;
    return (
        <>
            <Button {...props} className={`test-drive-button mt-0 ${className}`} >{children}</Button>
        </>
    )
}
PrimaryButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

