import React, { useState } from "react";
import Title from "../Title";
import Case from "../Case";
import { Modal, Button } from "@material-ui/core";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Cases = ({ title }) => {
  const [isOpen, setInOpen] = useState(false);

  return (
    <>
      <div className={cn("cases")} onClick={() => setInOpen(true)}>
        <Title text={title} />
        <div className={cn("cases_cards")}>
          <Case />
          <Case />
          <Case />
          <Case />
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setInOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={cn("module")}
      >
        <div className={cn("module_paper")}>
          <h2>Server-side modal</h2>
          <p>If you disable JavaScript, you will still see me.</p>
          <div className={cn("modal_buttons")}>
            <Button onClick={() => setInOpen(false)}>Close</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInOpen(false)}
            >
              Apply
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cases;
