import styles from "../styles/sort.module.css";
import { Arrow } from "./arrow";
import classNames from "classnames";

export const buttonNames = [
  "orderByLessons",
  "orderByStudents",
  "orderByRatio",
  "orderByPrice",
];

export function Sort({ change, setChange }) {
  function changeParam(buttonName) {
    if (change.selectButton !== buttonName) {
      setChange({ ...change, selectButton: buttonName, rotate: false });
    } else {
      setChange({ ...change, rotate: !change.rotate });
    }
  }

  return (
    <div className={styles.sortButtonWrap}>
      {buttonNames.map((buttonName) => (
        <div
          key={buttonName}
          className={styles.sortArrowWrap}
          onClick={() => changeParam(buttonName)}
        >
          <Arrow
            arrowStyles={styles.arrowInSortButton}
            isRotated={change.selectButton === buttonName && change.rotate}
          />
          <button
            className={classNames({
              [styles.changeColor]: change.selectButton === buttonName,
              [styles.sortButton]: true,
            })}
          >
            {buttonName}
          </button>
        </div>
      ))}
    </div>
  );
}
