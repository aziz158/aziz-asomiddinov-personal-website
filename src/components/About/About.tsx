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
              Hey there 👋, thank you for visiting my page. Results-driven and
              detail-oriented software engineer with a Master of Science in Data
              Science from the University of Denver and a Bachelor's degree in
              Computer Science from the University of California, Santa Cruz.
              Former Software Engineer at General Motors, responsible for
              developing RESTful APIs using the Spring framework, building
              front-end applications with Angular, designing and customizing
              CI/CD pipelines, and ensuring application reliability through
              comprehensive testing and maintenance across multiple
              environments. Proficient in programming languages including C/C++,
              JavaScript, HTML/CSS, Java, and Python. Possesses a strong command
              of core computer science principles, including data structures,
              algorithms, and software architecture. Demonstrates a proven
              ability to contribute effectively both independently and within
              collaborative, agile development environments. Well-versed in the
              full software development lifecycle and Agile methodologies.
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
