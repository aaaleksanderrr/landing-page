import FooterContainer from "../FooterContainer/FooterContainer";
import LandingPageContainer from "../LandingPageContainer/LandingPageContainer";
import NavigationContainer from "../NavigationContainer/NavigationContainer";
import OfferContainer from "../OfferContainer/OfferContainer";
import SpecialistContainer from "../SpecialistContainer/SpecialistContainer";

const AppContainer = () => {
  return (
    <>
      <NavigationContainer />
      <LandingPageContainer />
      <SpecialistContainer />
      <OfferContainer />
      <FooterContainer />
    </>
  );
};

export default AppContainer;
