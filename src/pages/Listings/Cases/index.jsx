import React from "react";
import Case from "components/Case";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Cases = ({ title, link }) => {
  return (
    <div className={cn("cases")}>
      <Link to={link} className={cn("cases_link")}>
        <h3 className={cn("cases_title")}>{title}</h3>
          <KeyboardArrowRightIcon/>
      </Link>
      <div className={cn("cases_cards")}>
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </div>
  );
};

export default Cases;
