import ClassificationResult from "./ClassificationResult";
import Form from "./Form";
import { useState } from "react";

const PoliticalTest = () => {
  const [party, setParty] = useState("");

  return (
    <div>
      <Form onSubmit={(newParty) => setParty(newParty)} />
      <ClassificationResult party={party} />
    </div>
  );
};

export default PoliticalTest;
