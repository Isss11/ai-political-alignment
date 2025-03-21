import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../../App";
import { FORM_PLACEHOLDER_TEXT, WORD_MINIMUM } from "../helpers";

const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");
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
      text: text,
    };

    axios
      .post("http://127.0.0.1:8000/classification", request)
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
    setWordCount(text ? text.split(" ").length : 0);
  }, [text, setErrorMessage]);

  return (
    <form>
      <InputTextarea
        id="political-text-area"
        placeholder={FORM_PLACEHOLDER_TEXT}
        rows={20}
        value={text}
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
      />
      <div>Word Count: {wordCount}</div>
      <Button label="Classify" onClick={classifyText} disabled={isLoading} />
      {errorMessage && <Message text={errorMessage} severity="error" />}
    </form>
  );
};

export default Form;
