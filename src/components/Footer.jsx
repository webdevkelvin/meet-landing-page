import ButtonFooter from "./ButtonFooter";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="vertical-line--footer"></div>
      <div className="number--footer">2</div>

      <div className="footer__container">
        <div className="footer__col-1">
          <h2 className="footer__heading">Experience more together</h2>
        </div>

        <div className="footer__col-2">
          <p className="footer__text">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
        </div>

        <div className="footer__col-3">
          <ButtonFooter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
