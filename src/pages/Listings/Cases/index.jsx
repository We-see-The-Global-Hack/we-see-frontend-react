import React from "react";
import Case from "components/Case";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Cases = ({ title, link, data }) => {
  return (
    <div className={cn("cases")}>
      <Link to={link} className={cn("cases_link")}>
        <h3 className={cn("cases_title")}>{title}</h3>
        <KeyboardArrowRightIcon />
      </Link>
      <div className={cn("cases_cards")}>
        {data.map((item, index) => (
          <Case key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
