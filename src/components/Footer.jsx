import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="vertical-line--footer"></div>
      <div className="number--footer">2</div>
      <div className="footer--container">
        <div className="footer--col-1">
          <h2 className="footer--heading">Experience more together</h2>
        </div>

        <div className="footer--col-2">
          <p className="footer--text">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
        </div>

        <div className="footer--col-3">
          <button className="btn btn--download btn--footer">
            Download<span class="footer--version">v1.3</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
