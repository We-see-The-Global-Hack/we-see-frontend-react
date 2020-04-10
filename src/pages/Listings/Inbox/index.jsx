import React from "react";
import { Avatar } from "@material-ui/core";

import avatarImage1 from "assets/img/avatar.jpg";
import avatarImage2 from "assets/img/avatar2.jpg";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Inbox = () => {
  return (
    <div>
      <h3 className={cn('message_title')}>Inbox</h3>
      <Message
        userName="Max"
        messageText="Hi, I have some questions on ..."
        avatar={avatarImage1}
      />
      <Message
        userName="Pramod"
        messageText="Hi, Thank you for your help ..."
        avatar={avatarImage2}
      />
    </div>
  );
};

const Message = ({ userName, messageText, avatar }) => {
  return (
    <div className={cn("message")}>
      <Avatar alt="Remy Sharp" src={avatar} className={cn("message_avatar")} />
      <div className={cn("message_content")}>
        <span className={cn("message_userName")}>{userName}</span>
        <span className={cn("message_messageText")}>{messageText}</span>
      </div>
    </div>
  );
};

export default Inbox;
