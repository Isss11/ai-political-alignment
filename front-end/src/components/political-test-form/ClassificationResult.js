import conservativeLogo from "../../assets/party-logos/conservative.png";
import liberalLogo from "../../assets/party-logos/liberal.png";
import ndpLogo from "../../assets/party-logos/ndp.png";
import greenLogo from "../../assets/party-logos/green.png";

const ClassificationResult = ({ party }) => {
  const getPoliticalPartyLogo = () => {
    const logoMappings = {
      Conservative: conservativeLogo,
      Liberal: liberalLogo,
      NDP: ndpLogo,
      Green: greenLogo,
    };

    return logoMappings[party];
  };

  return (
    <div>
      You are... {party}
      <img src={getPoliticalPartyLogo()} alt="Party Logo" />
    </div>
  );
};

export default ClassificationResult;
