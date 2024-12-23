import ClassificationResult from "./ClassificationResult";
import Form from "./Form";
import { parties } from "../helpers";

const PoliticalTest = () => {
  return (
    <div>
      <p>
        Want to see what party you're best aligned to? Enter a paragraph or two
        about your political beliefs, and submit!
      </p>
      <Form />
      <ClassificationResult party={parties.LIBERAL} />
    </div>
  );
};

export default PoliticalTest;
