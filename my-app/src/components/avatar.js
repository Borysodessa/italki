import styles from "../styles/avatar.module.css";
import { Star } from "./images/svgImages";

export function Avatar({ teacherInfo, userInfo }) {
  const flag = userInfo.living_country_id.toLowerCase();

  return (
    <div className={styles.avatarWrap}>
      <div className={styles.photoWrap}>
        <div className={styles.frameWrap}>
          <img
            className={styles.avatarPhoto}
            src={teacherInfo.video_pic_url}
            width="76"
            alt="avatarPhoto"
          ></img>
        </div>
        <img
          className={styles.flagFromAvatar}
          src={"https://scdn.italki.com/orion/static/flags/" + flag + ".svg"}
          alt="country_flag"
        ></img>
      </div>
      <div className={styles.ratingWrap}>
        <div className={styles.rating}>
          <Star />
          <span className={styles.ratingNumber}>{teacherInfo.pro_rating}</span>
        </div>
        <div className={styles.numberOfLessons}>
          <span> {teacherInfo.session_count} </span>Lessons
        </div>
      </div>
    </div>
  );
}
