const filtersInitialState = {
  selectedCountry: ["PK"],
  selectedLanguage: [],
  packageMin: 0,
  packageMax: 20,
};

export function filtersReducer(state = filtersInitialState, action) {
  if (action.type === "SELECTEDCOUNTRY") {
    return {
      ...state,
      selectedCountry: action.payload,
    };
  }
  if (action.type === "SELECTEDLANGUAGE") {
    return {
      ...state,
      selectedLanguage: action.payload,
    };
  }
  return state;
}
