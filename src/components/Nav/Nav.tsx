import { useBurgerStore } from "../../store/useBurgerStore";
import s from "./Nav.module.scss";

const Nav = () => {
  const { setIsBurger } = useBurgerStore();

  return (
    <nav className={s.nav}>
      <h2 className={s.logo}>AA.</h2>

      <ul className={s.links}>
        <li>
          <a className={s.link} href="#about_section">
            About
          </a>
        </li>

        <li>
          <a className={s.link} href="#projects_section">
            Projects
          </a>
        </li>

        <li>
          <a className={s.link} href="#contact_section">
            Contact
          </a>
        </li>
      </ul>

      <div className={s.burger} onClick={setIsBurger}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
    </nav>
  );
};

export default Nav;
