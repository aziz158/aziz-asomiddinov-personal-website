import Burger from "../Burger/Burger";
import Nav from "../Nav/Nav";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <video
        className={s.video}
        loop
        autoPlay
        muted
        preload="metadata"
        poster="/bg_video.webp"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <Burger />
      <Nav />

      <div className={s.container}>
        <h2 className={s.title}>
          Hello, I'm <span className={s.extra}>Aziz</span>
        </h2>

        <h3 className={s.subtitle}>I'm a software engineer</h3>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
