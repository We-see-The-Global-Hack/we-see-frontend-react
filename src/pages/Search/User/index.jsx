import React from "react";
import { Avatar } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const User = ({ avatar, name, email }) => {
  return (
    <div className={cn("user")}>
      <Avatar alt="Remy Sharp" src={avatar} className={cn("user_avatar")} />
      <div className={cn("user_info")}>
        <span className={cn("user_name")}>{name}</span>
        <span className={cn("user_email")}>{email}</span>
      </div>
      <AddCircleOutlineIcon className={cn("user_icon")} />
    </div>
  );
};

export default User;
