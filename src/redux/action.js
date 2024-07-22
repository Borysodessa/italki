export const countryfilter = (selectedCountry) => {
  return {
    type: "SELECTEDCOUNTRY",
    payload: selectedCountry,
  };
};

export const languageFilter = (selectedLanguage) => {
  return {
    type: "SELECTEDLANGUAGE",
    payload: selectedLanguage,
  };
};
