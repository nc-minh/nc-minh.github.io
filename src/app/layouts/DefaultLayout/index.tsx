import classNames from "classnames/bind";
import { ReactNode } from "react";

import styles from "./DefaultLayout.module.scss";
import { Footer } from "core/app/components/Footer";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props): ReactNode {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
