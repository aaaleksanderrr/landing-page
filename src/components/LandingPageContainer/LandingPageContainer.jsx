import "./LandingPageContainer.css";

const LandingPageContainer = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-section section-default-width">
        <div className="landing-page-box flex-column padding-small">
          <h1 className="landing-page-title text-bold">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="paragraph text-small text-bold">Nie wierz nam na słowo - sprawdź</p>
          <a href="#offer" className="button text-small text-bold">
            oferta
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContainer;
