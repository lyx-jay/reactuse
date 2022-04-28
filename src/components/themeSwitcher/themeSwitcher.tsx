import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import themeList from "../../data/themeList";
import ThemeSwitcherStyles from "./themeSwitcherStyles";

type ThemeProps = {
  className: string
}

export default function ThemeSwitcher(props: ThemeProps) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherStyles className={props.className} onClick={toggleTheme}>
      {
        theme === themeList.light ?
          <span className="iconfont icon-sun"></span> : 
          <span className="iconfont icon-moon"></span>
      }
    </ThemeSwitcherStyles>
  )
}
