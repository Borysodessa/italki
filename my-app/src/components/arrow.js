import arrow from "./images/arrow.svg";
import styles from "../styles/arrow.module.css";
import classNames from "classnames";

export function Arrow({ isRotated }) {
  return (
    <img
      src={arrow}
      className={classNames({
        [styles.rotate]: isRotated,
        [styles.arrowInSortButton]: true,
      })}
      alt="arrow in button"
    ></img>
  );
}
