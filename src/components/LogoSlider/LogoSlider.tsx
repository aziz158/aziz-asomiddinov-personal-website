import s from "./LogoSlider.module.scss";

interface Logo {
  text: string;
}

interface LogoSliderProps {
  logos: Logo[];
  slideWidth?: number;
  animationDuration?: number;
}

const LogoSlider = ({
  logos,
  slideWidth = 100,
  animationDuration = 20,
}: LogoSliderProps) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={s.logoSlider}>
      <div
        className={s.track}
        style={
          {
            "--slide-width": `${slideWidth}px`,
            "--animation-duration": `${animationDuration}s`,
            "--items-per-screen": logos.length,
          } as React.CSSProperties
        }
      >
        {duplicatedLogos.map((logo, index) => (
          <ul key={index} className={s.slide}>
            <li className={s.text}>{logo.text}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
