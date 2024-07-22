import styles from "../styles/teacherCard.module.css";

export function TitleAndJob({ teacherInfo, userInfo }) {
  return (
    <div>
      <h3 className={styles.nickname}>{userInfo.nickname}</h3>
      <img className="verifiedIdentity" src="" alt=""></img>
      <span className={styles.job}>{teacherInfo.job}</span>
    </div>
  );
}
