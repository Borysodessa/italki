import { Provider } from "react-redux";

import { store } from "./redux/store";

import { TeacherProfileLayout } from "./components/TeacherProfileLayout";

export function App() {
  return (
    <Provider store={store}>
      <TeacherProfileLayout />
    </Provider>
  );
}
