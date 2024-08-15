import "./FooterContainer.css";

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-section section-default-width flex-column text-small">
        <div className="footer-content">
          <p className="footer-text">Nazwa firmy - wszelkie prawa zastrzeżone, 2024</p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-instagram fa-2x footer-icon" aria-hidden="true"></i>{" "}
            </a>
            <a href="#">
              <i className="fa fa-facebook-square fa-2x footer-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContainer;
