import "./NavigationContainer.css";

const NavigationContainer = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-section section-default-width">
        <div className="navigation-subsection">
          <span className="nav-name text-small text-bold">nazwa firmy</span>
          <div className="navigation-subsection-right">
            <a href="#about" className="desktop-only nav-link text-small">
              o nas
            </a>
            <a href="#offer" className="desktop-only nav-link text-small">
              oferta
            </a>
            <span className="desktop-only nav-link text-small disabled">kontakt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
