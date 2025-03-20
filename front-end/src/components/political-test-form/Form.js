import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../../App";
import { FORM_PLACEHOLDER_TEXT, WORD_MINIMUM } from "../helpers";

const Form = ({ onSubmit }) => {
  const [generalText, setGeneralText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [errorMessage, setErrorMessage] = useState("");

  const classifyText = (e) => {
    e.preventDefault();

    if (wordCount < WORD_MINIMUM) {
      const error = `You must have at least ${WORD_MINIMUM} words to ensure that classification accuracy is sufficient.`;

      setErrorMessage(error);

      return;
    }

    setIsLoading(true);

    const request = {
      general: generalText,
    };

    axios
      .post("http://127.0.0.1:8000/classify", request)
      .then((response) => {
        const party = response.data[0];

        onSubmit(party);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  useEffect(() => {
    setErrorMessage("");
    setWordCount(generalText ? generalText.split(" ").length : 0);
  }, [generalText, setErrorMessage]);

  return (
    <form>
      <InputTextarea
        id="political-text-area"
        placeholder={FORM_PLACEHOLDER_TEXT}
        rows={20}
        value={generalText}
        disabled={isLoading}
        onChange={(e) => setGeneralText(e.target.value)}
      />
      <div>Word Count: {wordCount}</div>
      <Button
        label="Compute Results"
        onClick={classifyText}
        disabled={isLoading}
      />
      {errorMessage && <Message text={errorMessage} severity="error" />}
    </form>
  );
};

export default Form;
