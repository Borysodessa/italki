import styles from "../styles/pricePerTime.module.css";
import { priceListItem } from "./priceListItem";
import classNames from "classnames";

export function PricePerTime({ oneCourse, packageMax, packageMin }) {
  const courses = oneCourse.price_list;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableLanguage}>language: {oneCourse.language}</div>
      <div className={styles.tableTitle}>{oneCourse.title}</div>
      <div className={styles.tableWrap}>
        <div className={styles.titleWrap}>
          <div className={styles.nameCell}>time</div>
          <div className={styles.nameCell}>
            session price <span>price per 1 hour</span>
          </div>

          <div className={styles.nameCell}>
            <span>package price 1 hour</span>package price
          </div>
        </div>

        {courses.map((price) => {
          const {
            sessionLength,
            sessionPrice,
            pricePerOneHour,
            oneHourFromPackage,
            packagePrice,
          } = priceListItem(price);

          const isActuactualPrice =
            pricePerOneHour >= packageMin && pricePerOneHour <= packageMax;

          const isActuactualPacagePrice =
            oneHourFromPackage >= packageMin &&
            oneHourFromPackage <= packageMax;

          const isActuactualSessoinPrice =
            sessionPrice >= packageMin && sessionPrice <= packageMax;
          return (
            <div key={price.course_price_id} className={styles.columnWrap}>
              <div className={styles.cell}>
                {sessionLength}
                <span> min</span>
              </div>
              <div
                className={classNames({
                  [styles.actualColor]: isActuactualSessoinPrice,
                  [styles.oneHouerCell]: true,
                })}
              >
                {sessionPrice}
                <span
                  className={classNames({
                    [styles.actualColor]: isActuactualPrice,
                  })}
                >
                  {pricePerOneHour}
                </span>
              </div>
              <div className={styles.cell}>
                <div
                  className={classNames({
                    [styles.actualColor]: isActuactualPacagePrice,
                  })}
                >
                  {oneHourFromPackage}
                </div>
                <div>
                  {packagePrice}
                  <span>$ / {price.package_length}L</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
