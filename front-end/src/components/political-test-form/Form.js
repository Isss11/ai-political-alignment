import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

import axios from "axios";
import { useContext, useState } from "react";
import { LoadingContext } from "../../App";

const Form = ({ onSubmit }) => {
  const [generalText, setGeneralText] = useState("");
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const classifyText = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const request = {
      general: generalText,
    };

    axios.post("http://127.0.0.1:8000/classify", request).then((response) => {
      const party = response.data[0];

      onSubmit(party);
      setIsLoading(false);
    });
  };

  return (
    <form>
      <InputTextarea
        placeholder="First of all, I think we need to axe the carbon tax..."
        rows={30}
        cols={150}
        value={generalText}
        disabled={isLoading}
        onChange={(e) => setGeneralText(e.target.value)}
      />
      <Button
        label="Compute Results"
        onClick={classifyText}
        disabled={isLoading}
      />
    </form>
  );
};

export default Form;
