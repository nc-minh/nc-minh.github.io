import styles from "./Footer.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <div className={cx("container")}>
      <h3 className={cx("text")}>Copyright © 2023 Minh Nguyen Cong</h3>
    </div>
  );
};
