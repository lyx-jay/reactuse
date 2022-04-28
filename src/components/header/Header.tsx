import HeaderStyles from "./HeaderStyles";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">Lyx</div>
          <div className="header__categories">
            <a href="/" className="category__item">
              <span className="iconfont icon-github"></span>
            </a>
            <a href="/" className="category__item">Github</a>
            <a href="/" className="category__item">Blog</a>
            <a href="/" className="category__item">Projects</a>
            <ThemeSwitcher className="category__item"/>
          </div>
        </div>
      </div>
    </HeaderStyles>
  )
}
