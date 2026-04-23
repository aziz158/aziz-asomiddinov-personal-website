import { useBurgerStore } from "../../store/useBurgerStore";
import s from "./Burger.module.scss";

const Burger = () => {
  const { isBurger, setIsBurger } = useBurgerStore();

  return (
    <nav
      className={`${s.burger} ${isBurger && s.active}`}
      onClick={setIsBurger}
    >
      <ul className={s.links} onClick={(e) => e.stopPropagation()}>
        <li className={s.close} onClick={setIsBurger}>
          <div className={s.line}></div>
          <div className={s.line}></div>
        </li>

        <li onClick={setIsBurger}>
          <a className={s.link} href="#about_section">
            About
          </a>
        </li>

        <li onClick={setIsBurger}>
          <a className={s.link} href="#projects_section">
            Projects
          </a>
        </li>

        <li onClick={setIsBurger}>
          <a className={s.link} href="#contact_section">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Burger;
