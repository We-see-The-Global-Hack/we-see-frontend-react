import React, { useCallback } from "react";
import Case from "components/Case";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// router
import { useHistory } from "react-router-dom";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";

const cn = classNames.bind(styles);

const Cases = ({ title, link, data, isNeeds, isOffers }) => {
  const history = useHistory();

  const toCreateOffers = useCallback(() => {
    history.push("/listings/create/offers");
  }, [history]);
  const toCreateNeeds = useCallback(() => {
    history.push("/listings/create/needs");
  }, [history]);

  const onPressButton = useCallback(() => {
    if (isNeeds) return toCreateNeeds();
    toCreateOffers();
  }, [toCreateNeeds, toCreateOffers]);

  const buttonLabel = isNeeds ? "needs" : "offers";

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
      {(isNeeds || isOffers) && (
        <Button color="primary" onClick={onPressButton}>Create {buttonLabel}</Button>
      )}
    </div>
  );
};

export default Cases;
