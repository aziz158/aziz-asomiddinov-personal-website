import s from "./Footer.module.scss";

const Footer = () => {
  const images = [
    {
      id: 1,
      href: "https://github.com/aziz158",
      src: "/github.svg",
      alt: "github",
    },
    {
      id: 2,
      href: "https://www.instagram.com/aziz.158/",
      src: "/instagram.svg",
      alt: "instagram",
    },
    {
      id: 3,
      href: "https://www.facebook.com/azizasamiddinov/",
      src: "/facebook.svg",
      alt: "facebook",
    },
    {
      id: 4,
      href: "https://www.linkedin.com/in/azizkhuja/",
      src: "/linkedin.svg",
      alt: "linkedin",
    },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {images.map((img) => (
          <a className={s.link} key={img.id} href={img.href}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
