import ClassificationResult from "./ClassificationResult";
import Form from "./Form";
import { useState } from "react";

const PoliticalTest = () => {
  const [party, setParty] = useState("");

  return (
    <div>
      <p>
        Want to see what party you're best aligned to? Enter a paragraph or two
        about your political beliefs, and submit!
      </p>
      <Form onSubmit={(newParty) => setParty(newParty)} />
      <ClassificationResult party={party} />
    </div>
  );
};

export default PoliticalTest;
