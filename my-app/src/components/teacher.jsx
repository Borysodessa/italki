import styles from "../styles/teacherCard.module.css";
import { AllSpeakeLanguage } from "./language";
import { Avatar } from "./avatar";
import { Trial } from "./trialLessons";
import { AboutMe } from "./aboutMe";
import { TitleAndJob } from "./titleAndJob";

export function Teacher({ teacher, setSelectedTeacher }) {
  function changeAnyPriceFilter(e) {
    setSelectedTeacher(
      teacher.user_info.user_id === +e.currentTarget.id && teacher
    );
  }

  return (
    <section
      id={teacher.user_info.user_id}
      className={styles.sectionTeacherCard}
      onClick={(e) => changeAnyPriceFilter(e)}
    >
      <div className={styles.cardFlexWrap}>
        <Avatar
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
        />
        <div>
          <TitleAndJob
            teacherInfo={teacher.teacher_info}
            userInfo={teacher.user_info}
          />
          <AllSpeakeLanguage teacherInfo={teacher.teacher_info} />
          <AboutMe teacherInfo={teacher.teacher_info} />
          <Trial courseInfo={teacher.course_info} />
        </div>
      </div>
    </section>
  );
}
