import "./App.css";
import { useState } from "react";
import json from "./components/data.json";
import { Teacher } from "./components/teacher";
import { Filter } from "./components/filters";
import { languageData } from "./components/languageData";
import { сountryData } from "./components/countryData";
import { countryName } from "./components/countryData";
import { languageName } from "./components/languageData";

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const filteredTeachers = json.data.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((item) => item["language"])
        .includes(el);
    });
  });

  const finalFilter = filteredTeachers.filter((teacher) => {
    return selectedCountry.length === 0
      ? filteredTeachers
      : selectedCountry.includes(teacher.user_info.living_country_id);
  });

  return (
    <div>
      <Filter
        targetName={countryName}
        criteria={"Country"}
        buttonName={"country"}
        teachersData={сountryData(json.data)}
        selectedTarget={selectedCountry}
        setSelectedTarget={setSelectedCountry}
      />
      <Filter
        targetName={languageName}
        criteria={"Language"}
        buttonName={"language"}
        selectedTarget={selectedLanguage}
        setSelectedTarget={setSelectedLanguage}
        teachersData={languageData(json.data)}
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
