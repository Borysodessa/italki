import styles from "../styles/filter.module.css";
import { Arrow } from "./arrow";
import { useState } from "react";

export function Filter({
  targetName = (item) => item,
  selectedTarget,
  teachersData,
  buttonName,
  setSelectedTarget,
  criteria,
  selectedByCriterion,
  buttonLogo,
  renderItem = (item) => item,
  numberOfTeachers,
  filterMenuStyles,
}) {
  const [openButton, setOpenButton] = useState(false);
  const [substr, setSubstr] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  function selectTargetValue(i) {
    if (selectedTarget.includes(i)) {
      setSelectedTarget(selectedTarget.filter((el) => el !== i));
    } else {
      setSelectedTarget([...selectedTarget, ...[i]]);
    }
  }

  function filtersMenuButton() {
    setOpenButton(() => !openButton);
    setIsRotated(!isRotated);
  }

  function enterSubstr(event) {
    setSubstr(() => event.target.value);
  }

  const teachers = teachersData.filter((teacher) =>
    targetName(teacher).toLowerCase().includes(substr.toLocaleLowerCase())
  );

  return (
    <div>
      <div className={styles.filtersWrap}>
        <div className={styles.menuButtonWrap} onClick={filtersMenuButton}>
          <img
            src={buttonLogo}
            className={styles.buttonNameLogo}
            alt="logo name button"
          ></img>

          <Arrow isRotated={isRotated} />

          <button className={styles.filtersMenuButton}>{buttonName}</button>
        </div>

        <div className={styles.criteriaWrap}>
          <h3 className={styles.criteriaName}>Selected {criteria}</h3>
          <span className={styles.selectedCountrySpan}>
            {selectedByCriterion}
          </span>

          <span> number of teachers {numberOfTeachers}</span>
        </div>

        {openButton && (
          <div>
            <div className={styles.filtersMenuWrap} style={filterMenuStyles}>
              <input onChange={(event) => enterSubstr(event)} />

              {teachers.map((item) => {
                return (
                  <div className={styles.renderWrap}>
                    <div
                      key={item}
                      className={styles.renderItemWrap}
                      onClick={() => selectTargetValue(item)}
                    >
                      {renderItem(item)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
