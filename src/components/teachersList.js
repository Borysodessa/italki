import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { countryfilter } from "../redux/action";
import { languageFilter } from "../redux/action";

import styles from "../styles/teachersList.module.css";

import { Teacher } from "./teacher";
import { Filter } from "./filters";
import { languageData } from "./languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./countryData";
import { criterionLanguage } from "./languageData";
import { FilterByPrice } from "./filterByPrice.js";
import countryLogo from "./images/buttonLogos/countryLogo.svg";
import languageLogo from "./images/buttonLogos/languageLogo.svg";
import { ClearAll } from "./clearAll";
import { Sort } from "./sort";
import { sorting } from "./sorting";
import { filteredTeachersByLanguage } from "./filteredTeachersByLanguage.js";
import { filteringTeachersByPricesPerHour } from "./funcPrices.js";

export function TeacherList({
  jsonData,
  setSelectedTeacher,
  packageMax,
  setPackageMax,
  packageMin,
  setPackageMin,
}) {
  // const [selectedLanguage, setSelectedLanguage] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState([]);

  const [change, setChange] = useState({
    selectButton: "orderByLessons",
    rotate: false,
  });

  const country = useSelector((state) => {
    return state.filters.selectedCountry;
  });
  const language = useSelector((state) => {
    return state.filters.selectedLanguage;
  });

  const dispatch = useDispatch();

  const selectTargetCountry = (i) => dispatch(countryfilter(i));
  const selectTargetLanguage = (i) => dispatch(languageFilter(i));

  const changeRotate = change.rotate;
  const selectedButton = change.selectButton;

  // function clear() {
  //   setSelectedCountry([]);
  //   setSelectedLanguage([]);
  // }

  // const filteredTeachersByLanguage = jsonData.filter((teacher) => {
  //   return selectedLanguage.every((el) => {
  //     return [
  //       ...teacher.teacher_info.teach_language,
  //       ...teacher.teacher_info.also_speak,
  //     ]
  //       .map((item) => item["language"])
  //       .includes(el);
  //   });
  // });

  // function filteredTeachersByLanguage(jsonData, selectedLanguage) {
  //   if (selectedLanguage.length === 0) {
  //     return jsonData;
  //   }

  //   return jsonData.filter((teacher) => {
  //     return selectedLanguage.every((el) => {
  //       return [
  //         ...teacher.teacher_info.teach_language,
  //         ...teacher.teacher_info.also_speak,
  //       ]
  //         .map((item) => item["language"])
  //         .includes(el);
  //     });
  //   });
  // }

  const anyFilter = filteredTeachersByLanguage(jsonData, language).filter(
    (teacher) => {
      return country.length === 0
        ? filteredTeachersByLanguage
        : country.includes(teacher.user_info.living_country_id);
    }
  );

  const anySorting = sorting(anyFilter, selectedButton, changeRotate);

  const teachers = filteringTeachersByPricesPerHour(
    packageMin,
    packageMax,
    anySorting
  );

  function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
    if (language.length > 0) {
      return filteredTeachersByLanguage.length;
    }
    return 0;
  }

  const numberOfTeachersByCountry = jsonData.filter((teacher) => {
    return country.includes(teacher.user_info.living_country_id);
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
          selectedByCriterion={criterionCountry(country)}
          criteria={"Country"}
          buttonName={"Teacher is from"}
          teachersData={сountryData(jsonData)}
          selectedTarget={country}
          setSelectedTarget={selectTargetCountry}
        />
        <Filter
          filterMenuStyles={languageStyles}
          numberOfTeachers={numberOfTeachersByLanguage(
            filteredTeachersByLanguage
          )}
          buttonLogo={countryLogo}
          selectedByCriterion={criterionLanguage(language)}
          criteria={"Language"}
          buttonName={"language"}
          selectedTarget={language}
          setSelectedTarget={selectTargetLanguage}
          teachersData={languageData(jsonData)}
        />

        <Sort change={change} setChange={setChange} />

        <ClearAll />

        <FilterByPrice
          setPackageMin={setPackageMin}
          setPackageMax={setPackageMax}
          packageMin={packageMin}
          packageMax={packageMax}
        />
      </div>

      <div className={styles.flexWrap}>
        <div className={styles.teacherContainer}>
          {teachers.map((teacher) => (
            <div
              key={teacher.user_info.user_id}
              className={styles.anyPriceFilterWrap}
            >
              <Teacher
                teacher={teacher}
                selectedCountry={country}
                key={teacher.user_info.user_id}
                setSelectedTeacher={setSelectedTeacher}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
