import { useState} from 'react';
import GlobalStyles from './globalStyles/globalStyles';
import LandingPage from './pages/LandingPage';
import themeList from './data/themeList';
import ThemeContext from './context/themeContext';
import "./assets/icon/iconfont.css";

export default function App() {

  const [theme, settheme] = useState(themeList.light);
  const toggleTheme = () => {
    settheme(theme === themeList.dark ? themeList.light : themeList.dark)
  }
  console.log(theme)
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <GlobalStyles theme={theme}/>
        <LandingPage />
      </ThemeContext.Provider>
    </>
  );
}
