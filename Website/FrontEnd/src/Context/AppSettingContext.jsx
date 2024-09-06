/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppSettingContext = createContext({});

const AppSettingProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [language, setLanguage] = useState("en");
  const ToggleTheme = () => setDarkTheme(!darkTheme);
  const ToggleLanguage = () => setLanguage(language === "ar" ? "en" : "ar");

  return <AppSettingContext.Provider value={{ darkTheme,language, ToggleTheme, ToggleLanguage }}>{children}</AppSettingContext.Provider>;
};

export default AppSettingProvider;

export const useAppSetting = () => {
  return useContext(AppSettingContext);
};
