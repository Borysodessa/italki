export function filteredTeachersByLanguage(jsonData, selectedLanguage) {
  if (selectedLanguage.length === 0) {
    return jsonData;
  }

  return jsonData.filter((teacher) => {
    return selectedLanguage.every((el) => {
      return [
        ...teacher.teacher_info.teach_language,
        ...teacher.teacher_info.also_speak,
      ]
        .map((item) => item["language"])
        .includes(el);
    });
  });
}
