import { parties } from "../helpers";
import { Card } from "primereact/card";
import "./political-test-form.css";

const ClassificationResult = ({ party }) => {
  const getPartyKey = () => {
    return party.toUpperCase();
  };

  const getPartyDetails = () => {
    return parties[getPartyKey()];
  };

  const getPoliticalPartyLogo = () => {
    return getPartyDetails().logo;
  };

  return party ? (
    <div>
      <Card title="Your Results">
        <div className="classification-result-container">
          <div>
            <p>
              After analyzing what you wrote, you best align with the{" "}
              <strong>{parties[getPartyKey()].pluralLabel}.</strong>
            </p>
            <h3>About the {parties[getPartyKey()].pluralLabel} </h3>
            <p>{parties[getPartyKey()].description}</p>
          </div>
          <img
            className="small-logo"
            src={getPoliticalPartyLogo()}
            alt="Party Logo"
          />
        </div>
      </Card>
    </div>
  ) : null;
};

export default ClassificationResult;
