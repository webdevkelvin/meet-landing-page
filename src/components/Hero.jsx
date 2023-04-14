import imageHeroLeft from "../assets/desktop/image-hero-left.png";
import imageHeroRight from "../assets/desktop/image-hero-right.png";
import imageHeroTablet from "../assets/tablet/image-hero.png";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero--img-box">
        <img src={imageHeroLeft} alt="" className="hero--img-left" />
        <img src={imageHeroRight} alt="" className="hero--img-right" />
        <img src={imageHeroTablet} alt="" className="hero--img-tablet" />
      </div>

      <div className="hero--wrapper">
        <div className="hero--text-box">
          <h1 className="hero--title">Group Chat for Everyone</h1>
          <p className="hero--text">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
        </div>

        <div className="hero--actions">
          <button className="btn btn--download">
            Download<span class="version">v1.3</span>
          </button>

          <a href="#" class="btn btn--link">
            What is it?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
