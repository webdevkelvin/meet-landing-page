import imageHeroLeft from "../../assets/desktop/image-hero-left.png";
import imageHeroRight from "../../assets/desktop/image-hero-right.png";
import imageHeroTablet from "../../assets/tablet/image-hero.png";

import "./HeroImageBox.css";

function HeroImageBox() {
  return (
    <div className="hero--img-box">
      <img src={imageHeroLeft} alt="" className="hero--img-left" />
      <img src={imageHeroRight} alt="" className="hero--img-right" />
      <img src={imageHeroTablet} alt="" className="hero--img-tablet" />
    </div>
  );
}

export default HeroImageBox;
