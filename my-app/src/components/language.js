import styles from "../styles/teacherCard.module.css";

export function AllSpeakeLanguage({ teacherInfo }) {
  return (
    <div className={styles.languageFlexWrap}>
      <p className={styles.teach_language}>speaks: </p>
      <span className={styles.speakLanguage}>
        {[...teacherInfo.teach_language, ...teacherInfo.also_speak]
          .map((el) => el["language"])
          .slice(0, 5)
          .join(", ")}
      </span>
    </div>
  );
}
