// import { useState } from "react";
// import styles from "../styles/filter.module.css";
// import { Filter } from "./filters";
// import { FilterByPrice } from "./filterByPrice.js";
// import { ClearAll } from "./clearAll";
// import { Sort } from "./sort";
// import countryLogo from "./images/buttonLogos/countryLogo.svg";
// import languageLogo from "./images/buttonLogos/languageLogo.svg";
// import { criterionLanguage } from "./languageData";
// import {
//   countryName,
//   criterionCountry,
//   сountryData,
//   countryFlag,
// } from "./countryData";
// import { languageData } from "./languageData";
// import { filteredTeachersByLanguage } from "./filteredTeachersByLanguage.js";

// export function AllFilters({
//   jsonData,
//   packageMin,
//   packageMax,
//   setPackageMin,
//   setPackageMax,
//   selectedCountry,
//   setSelectedCountry,
//   change,
//   setChange,
//   selectedLanguage,
//   setSelectedLanguage,
// }) {
//   function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
//     if (selectedLanguage.length > 0) {
//       return filteredTeachersByLanguage.length;
//     }
//     return 0;
//   }

//   const numberOfTeachersByCountry = jsonData.filter((teacher) => {
//     return selectedCountry.includes(teacher.user_info.living_country_id);
//   }).length;

//   function clear() {
//     setSelectedCountry([]);
//     setSelectedLanguage([]);
//   }

//   const countryStyles = { left: 30 };
//   const languageStyles = { left: 315 };

//   return (
//     <div className={styles.filtersWrap}>
//       <Filter
//         change={change}
//         setChange={setChange}
//         filterMenuStyles={countryStyles}
//         numberOfTeachers={numberOfTeachersByCountry}
//         renderItem={countryFlag}
//         targetName={countryName}
//         buttonLogo={languageLogo}
//         selectedByCriterion={criterionCountry(selectedCountry)}
//         criteria={"Country"}
//         buttonName={"Teacher is from"}
//         teachersData={сountryData(jsonData)}
//         selectedTarget={selectedCountry}
//         setSelectedTarget={setSelectedCountry}
//       />
//       <Filter
//         change={change}
//         setChange={setChange}
//         filterMenuStyles={languageStyles}
//         numberOfTeachers={numberOfTeachersByLanguage(
//           filteredTeachersByLanguage
//         )}
//         buttonLogo={countryLogo}
//         selectedByCriterion={criterionLanguage(selectedLanguage)}
//         criteria={"Language"}
//         buttonName={"language"}
//         selectedTarget={selectedLanguage}
//         setSelectedTarget={setSelectedLanguage}
//         teachersData={languageData(jsonData)}
//       />

//       <Sort change={change} setChange={setChange} />

//       <ClearAll clear={clear} />

//       <FilterByPrice
//         setPackageMin={setPackageMin}
//         setPackageMax={setPackageMax}
//         packageMin={packageMin}
//         packageMax={packageMax}
//       />
//     </div>
//   );
// }
