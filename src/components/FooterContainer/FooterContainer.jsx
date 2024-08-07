import "./FooterContainer.css";

const FooterContainer = () => {
  return (
    <div class="footer-container">
      <div class="footer-section section-default-width flex-column text-small">
        <div class="footer-content">
          <p class="footer-text">Nazwa firmy - wszelkie prawa zastrzeżone, 2024</p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-instagram fa-2x footer-icon" aria-hidden="true"></i>{" "}
            </a>
            <a href="#">
              <i class="fa fa-facebook-square fa-2x footer-icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
