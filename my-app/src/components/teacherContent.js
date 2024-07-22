import styles from "../styles/teacherContent.module.css";
import { PricePerTime } from "./pricePerTime";

export function TeacherContent({ selectedTeacher, packageMax, packageMin }) {
  if (selectedTeacher === null) {
    return null;
  }
  return (
    <div className={styles.teacherContentWrap}>
      <div>{selectedTeacher.user_info.nickname}</div>

      {selectedTeacher.pro_course_detail.map((oneCourse) => {
        return (
          <PricePerTime
            key={oneCourse.id}
            oneCourse={oneCourse}
            packageMin={packageMin}
            packageMax={packageMax}
          />
        );
      })}
    </div>
  );
}
