export function languageData(teachersDataBase) {
  return [
    ...new Set(
      teachersDataBase
        .map((teacher) => {
          return [
            ...teacher.teacher_info.teach_language,
            ...teacher.teacher_info.also_speak,
          ].map((el) => el["language"]);
        })
        .reduce((akk, curr) => [...akk, ...curr])
    ),
  ];
}

export function languageName(item) {
  return item;
}

export function criterionLanguage(selectedTarget) {
  return selectedTarget.map((target) => target).join(", ");
}

export function renderLanguage(item) {
  return item;
}
