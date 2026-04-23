import s from "./Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "/spotify.webp",
      alt: "spotify",
      href: "https://github.com/aziz158/tomandaziz",
      text: "Spotify API: Exploratory Data Analysis: What Variables are Associated with Song Popularity #API, #Selenium, #BeautifulSoup, #Python",
      btn: "GitHub"
    },
    {
      id: 2,
      src: "/vegetables.webp",
      alt: "vegetables",
      href: "https://github.com/aziz158/cnn_food",
      text: "Convolutional Neural Network-Powered Food Recognition: Smarter Sorting for Fruits and Vegetables by Azizkhuja Asomiddinov #Tensorflow, #Keras, #Matplotlib, #Pandas #Python",
      btn: "GitHub"
    },
    {
      id: 3,
      src: "/ucsc.webp",
      alt: "ucsc",
      href: "https://github.com/lmlstrandingnetwork/lml-stranding-map",
      text: "Checkout Marine Stranding Web Application tool that we built for UCSC Long Marine Lab scientist. #ReactJS, #Bootstrap, #Algolia, #Mapbox, #GoogleFirebase, #Heroku",
      btn: "GitHub"
    },
    {
      id: 4,
      src: "/sos.webp",
      alt: "sos",
      href: "https://github.com/hamfox/save-our-species",
      text: "See our IPhone application for reporting Strandings on the beaches. #Swift, #GoogleFirebase",
      btn: "GitHub"
    },
    {
      id: 5,
      src: "/huffman.svg",
      alt: "huffman",
      href: "https://en.m.wikipedia.org/wiki/Huffman_coding",
      text: "This is the project that I was working in my freshmen year at De Anza. I used Huffman encoding algorithm to encrypt and compress the data. #C++, #BinaryTree, #LinkedList, #Dictionary",
      btn: "Wiki"
    },
    {
      id: 6,
      src: "/personal_website.png",
      alt: "personal_website.png",
      href: "",
      text: "Check the source code on github of this website. #ReactJS, #CSS, #Javascript, #HTML",
      btn: "Website"
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
