import styles from "../styles/countryData.module.css";
export const countryFullName = {
  PK: "Pakistan",
  EG: "Egipt",
  ZA: "SouthAfrica",
  CN: "China",
  CA: "Canada",
  NG: "Nigeria",
  TR: "Turkey",
  ZW: "Zimbabwe",
  MZ: "Mozambique",
  DZ: "Algiers",
  GR: "Greece",
  PT: "Portugal",
  TW: "Taiwan",
};

export function сountryData(teachersDataBase) {
  return [
    ...new Set(
      teachersDataBase.map((teacher) => teacher.user_info.living_country_id)
    ),
  ];
}

export function countryName(item) {
  return countryFullName[item];
}

export function criterionCountry(selectedTarget) {
  return selectedTarget.map((target) => countryFullName[target]).join(", ");
}

export function countryFlag(item) {
  return (
    <div className={styles.languageItemWrap}>
      {countryFullName[item]}
      <img
        src={
          "https://scdn.italki.com/orion/static/flags/" +
          item.toLocaleLowerCase() +
          ".svg"
        }
        alt="flag"
        width="20"
      ></img>
    </div>
  );
}
