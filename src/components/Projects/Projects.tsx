import s from "./Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "/smart_metric_hub.png",
      alt: "smart_metric_hub",
      href: "https://github.com/aziz158/smart-metric-hub",
      text: "A modern, mobile-first React web application that brings together health, fitness, and everyday metric tools in one clean platform. Built for speed and simplicity — no sign-up, no tracking, just fast and accurate calculations.",
      btn: "GitHub"
    },
    {
      id: 2,
      src: "/spotify.webp",
      alt: "spotify",
      href: "https://github.com/aziz158/tomandaziz",
      text: "Spotify API: Exploratory Data Analysis: What Variables are Associated with Song Popularity #API, #Selenium, #BeautifulSoup, #Python",
      btn: "GitHub"
    },
    {
      id: 3,
      src: "/vegetables.webp",
      alt: "vegetables",
      href: "https://github.com/aziz158/cnn_food",
      text: "Convolutional Neural Network-Powered Food Recognition: Smarter Sorting for Fruits and Vegetables by Azizkhuja Asomiddinov #Tensorflow, #Keras, #Matplotlib, #Pandas #Python",
      btn: "GitHub"
    },
    {
      id: 4,
      src: "/ucsc.webp",
      alt: "ucsc",
      href: "https://github.com/lmlstrandingnetwork/lml-stranding-map",
      text: "Checkout Marine Stranding Web Application tool that we built for UCSC Long Marine Lab scientist. #ReactJS, #Bootstrap, #Algolia, #Mapbox, #GoogleFirebase, #Heroku",
      btn: "GitHub"
    },
    {
      id: 5,
      src: "/sos.webp",
      alt: "sos",
      href: "https://github.com/hamfox/save-our-species",
      text: "See our IPhone application for reporting Strandings on the beaches. #Swift, #GoogleFirebase",
      btn: "GitHub"
    },
    {
      id: 6,
      src: "/personal_website.png",
      alt: "personal_website.png",
      href: "https://github.com/aziz158/aziz-asomiddinov-personal-website",
      text: "Check the source code on github of this website. #ReactJS, #CSS, #Javascript, #HTML",
      btn: "Github"
    },
  ];

  return (
    <section className={s.projects} id="projects_section">
      <div className={s.container}>
        <h2 className={s.title}>Projects</h2>

        <ul className={s.block}>
          {projects.map((proj) => (
            <li key={proj.id} className={s.box}>
              <div className={s.folderT}>
                <img
                  className={s.img}
                  src={proj.src}
                  alt={proj.alt}
                  loading="lazy"
                />
              </div>

              <div className={s.folderB}>
                <p className={s.text}>{proj.text}</p>

                <div className={s.wrap}>
                  <a className={s.link} target="_blank" href={proj.href}>
                    {proj.btn}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
