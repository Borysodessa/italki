import styles from "../styles/teacherCard.module.css";

export function Trial({ courseInfo }) {
  const trialPrice = (courseInfo.trial_price / 100).toFixed(2);

  return (
    <div className={styles.trialLessons}>
      <div className="priceTrial">
        <span className={styles.currency}> USD </span>
        <span className={styles.price}>{trialPrice}</span>
        <span className={styles.trial}>/ trial</span>
      </div>

      <div className={styles.buttonTrialWrap}>
        <input type="checkbox"></input>
        <button className={styles.bookTrial} type="button">
          Book trial
        </button>
      </div>
    </div>
  );
}
