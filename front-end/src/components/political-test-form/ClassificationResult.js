import conservativeLogo from "../../assets/party-logos/conservative.png";
import liberalLogo from "../../assets/party-logos/liberal.png";
import ndpLogo from "../../assets/party-logos/ndp.png";
import greenLogo from "../../assets/party-logos/green.png";

const ClassificationResult = ({ party }) => {
  const getPoliticalPartyLogo = () => {
    const logoMappings = {
      conservative: conservativeLogo,
      liberal: liberalLogo,
      ndp: ndpLogo,
      green: greenLogo,
    };

    return logoMappings[party];
  };

  return party ? (
    <div>
      You are... {party}
      <img src={getPoliticalPartyLogo()} alt="Party Logo" />
    </div>
  ) : null;
};

export default ClassificationResult;
