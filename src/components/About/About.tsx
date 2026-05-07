import LogoSlider from "../LogoSlider/LogoSlider";
import s from "./About.module.scss";

const About = () => {
  const logos = [
    { text: "HTML" },
    { text: "CSS" },
    { text: "JAVASCRIPT" },
    { text: "REACT" },
    { text: "C" },
    { text: "C++" },
    { text: "JAVA" },
    { text: "PYTHON" },
    { text: "SQL" },
    { text: "Docker" },
    { text: "Kubernetes" },
    { text: "SDK" },
    { text: "AWS" },
    { text: "AZURE" },

  ];

  return (
    <section className={s.about} id="about_section">
      <div className={s.container}>
        <h2 className={s.title}>Little bit about myself</h2>

        <hr className={s.line} />

        <div className={s.block}>
          <img className={s.img} src="/aziz.jpg" alt="aziz" loading="lazy" />

          <div className={s.box}>
            <h3 className={s.name}>Azizkhuja Asomiddinov</h3>

            <p className={s.text}>
              Software engineer with 5+ years of experience designing, building, and maintaining scalable software systems across backend and frontend environments. Completed a Master of Science in Data Science from the University of Denver and a Bachelor’s degree in Computer Science from the University of California, Santa Cruz. Currently a Full Stack Engineer at Sordar Studios, developing and maintaining backend services and responsive frontend interfaces for game systems, including player data management, live content updates, and real-time integrations. Previously worked as a Software Engineer at General Motors, where responsibilities included building RESTful APIs using Spring, developing front-end applications with Angular, and designing CI/CD pipelines to support reliable deployments across multiple environments. Proficient in C/C++, JavaScript, Java, Python, and modern web technologies, with a strong foundation in data structures, algorithms, and software architecture. Experienced in Agile development and the full software development lifecycle, with a track record of contributing effectively in both team-based and independent settings.
            </p>

            <a className={s.link} href="/Aziz_2026_Resume.pdf" download={"Aziz_Resume_2026"}>
              My Resume
            </a>
          </div>
        </div>
      </div>

      <LogoSlider logos={logos} slideWidth={150} animationDuration={30} />
    </section>
  );
};

export default About;
