import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios from "axios";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [generalText, setGeneralText] = useState("");

  const classifyText = (e) => {
    e.preventDefault();

    console.log("Classify text.");

    const request = {
      general: generalText,
    };

    axios.post("http://127.0.0.1:8000/classify", request).then((response) => {
      const party = response.data[0];

      onSubmit(party);
    });
  };

  return (
    <form>
      <InputTextarea
        placeholder="First of all, I think we need to axe the carbon tax..."
        rows={30}
        cols={150}
        value={generalText}
        onChange={(e) => setGeneralText(e.target.value)}
      />
      <Button label="Compute Results" onClick={classifyText} />
    </form>
  );
};

export default Form;
