import "./LandingPageContainer.css";

const LandingPageContainer = () => {
  return (
    <div className="landing-page-container">
      <section className="landing-page-section section-default-width">
        <div className="landing-page-box flex-column">
          <h1 className="landing-page-title text-bold margin-left-small">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="paragraph text-small text-bold margin-left-small">
            Nie wierz nam na słowo - sprawdź
          </p>
          <a href="#offer" className="button text-small text-bold margin-left-small">
            oferta
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPageContainer;
