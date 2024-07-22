import styles from "./styles/app.module.css";
import { useState } from "react";
import json from "./components/data.json";
import { Teacher } from "./components/teacher";
import { Filter } from "./components/filters";
import { languageData } from "./components/languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./components/countryData";
import { criterionLanguage } from "./components/languageData";
import countryLogo from "./components/images/buttonLogos/countryLogo.svg";
import languageLogo from "./components/images/buttonLogos/languageLogo.svg";
import { ClearAll } from "./components/clearAll";
import { Sort } from "./components/sort";

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [order, setOrder] = useState(true);

  const filteredTeachersByLanguage = json.data.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((item) => item["language"])
        .includes(el);
    });
  });

  const finalFilter = filteredTeachersByLanguage.filter((teacher) => {
    return selectedCountry.length === 0
      ? filteredTeachersByLanguage
      : selectedCountry.includes(teacher.user_info.living_country_id);
  });

  function sortByLessons(finalFilter) {
    return order
      ? finalFilter.sort(
          (a, b) => b.teacher_info.session_count - a.teacher_info.session_count
        )
      : finalFilter.sort(
          (a, b) => a.teacher_info.session_count - b.teacher_info.session_count
        );
  }
  console.log("sss", sortByLessons(finalFilter));

  function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
    if (selectedLanguage.length > 0) {
      return filteredTeachersByLanguage.length;
    }
    return 0;
  }

  const numberOfTeachersByCountry = json.data.filter((teacher) => {
    return selectedCountry.includes(teacher.user_info.living_country_id);
  }).length;

  const countryStyles = { left: 30 };
  const languageStyles = { left: 315 };

  return (
    <div>
      <div className={styles.filtersWrap}>
        <Filter
          filterMenuStyles={countryStyles}
          numberOfTeachers={numberOfTeachersByCountry}
          renderItem={countryFlag}
          targetName={countryName}
          buttonLogo={languageLogo}
          selectedByCriterion={criterionCountry(selectedCountry)}
          criteria={"Country"}
          buttonName={"Teacher is from"}
          teachersData={сountryData(json.data)}
          selectedTarget={selectedCountry}
          setSelectedTarget={setSelectedCountry}
        />
        <Filter
          filterMenuStyles={languageStyles}
          numberOfTeachers={numberOfTeachersByLanguage(
            filteredTeachersByLanguage
          )}
          buttonLogo={countryLogo}
          selectedByCriterion={criterionLanguage(selectedLanguage)}
          criteria={"Language"}
          buttonName={"language"}
          selectedTarget={selectedLanguage}
          setSelectedTarget={setSelectedLanguage}
          teachersData={languageData(json.data)}
        />
      </div>
      <Sort setOrder={setOrder} />

      <ClearAll
        setSelectedCountry={setSelectedCountry}
        setSelectedLanguage={setSelectedLanguage}
      />
      {finalFilter.map((teacher) => (
        <Teacher
          selectedCountry={selectedCountry}
          key={teacher.user_info.user_id}
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
          courseInfo={teacher.course_info}
        />
      ))}
    </div>
  );
}
