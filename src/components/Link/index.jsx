// react
import React from 'react';
// router
import {Link} from "react-router-dom"
// styles
import styles from "components/Link/styles.module.scss"
//classnames
import classNames from "classnames";
const cx = classNames.bind(styles);


const CustomLink = ({to, style, children}) => {
  let rootStyle = cx({[styles.container]: true}, style)

  return (
    <Link to={to} className={rootStyle}>{children}</Link>
  );
};

export default CustomLink;
