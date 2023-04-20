import HeroImageBox from "./HeroImageBox";
import HeroTextbox from "./HeroTextbox";
import ButtonDownload from "../ButtonDownload";
import ButtonLink from "../ButtonLink";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <HeroImageBox />

      <div className="hero--wrapper">
        <HeroTextbox />

        <div className="hero__actions">
          <ButtonDownload />
          <ButtonLink />
        </div>
      </div>
    </section>
  );
}

export default Hero;
