import React from "react";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Title = ({ text }) => {
  return <h2 className={cn('title')}>{text}</h2>;
};

export default Title;
