import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";

import ncMinhImage from "core/assets/images/nc-minh.jpeg";

const cx = classNames.bind(styles);

export const HomePage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("imageWrapper")}>
        <img
          className={cx("avatar")}
          src={ncMinhImage}
          alt="Nguyen Cong Minh"
        />
      </div>
      <h1 className={cx("title")}>
        I'm <strong className={cx("highlight")}>Minh</strong>, passionate about
        Software Development, Thriving on Continuous Learning.
      </h1>
      <div className={cx("description")}>
        <p>
          Check out some of my projects over at{" "}
          <Link to="https://github.com/nc-minh" className={cx("highlight")}>
            Github
          </Link>
          .
        </p>
        <p>
          You may also take a look at my{" "}
          <Link className={cx("highlight")} to={"/resume"}>
            resume here!
          </Link>
        </p>
        <p>
          Feel free to contact me at{" "}
          <Link
            className={cx("highlight")}
            to={"https://www.linkedin.com/in/nc-minh"}
          >
            LinkedIn
          </Link>
        </p>
        <p>
          or by{" "}
          <Link className={cx("highlight")} to={"mailto:cminh.luv@gmail.com"}>
            email
          </Link>
        </p>
      </div>
    </div>
  );
};
