import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../../App";
import { FORM_PLACEHOLDER_TEXT, WORD_MINIMUM } from "../helpers";
import "./political-test-form.css";

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

    const url = `${process.env.REACT_APP_BACK_END_URL}:${process.env.REACT_APP_BACK_END_PORT}/classification`;

    axios
      .post(url, request)
      .then((response) => {
        const party = response.data;

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
      <div id="submission-bar">
        <div>Word Count: {wordCount}</div>
        <Button
          id="classify-button"
          label="Classify"
          onClick={classifyText}
          disabled={isLoading}
        />
        {errorMessage && <Message text={errorMessage} severity="error" />}
      </div>
      <InputTextarea
        id="political-text-area"
        placeholder={FORM_PLACEHOLDER_TEXT}
        rows={20}
        value={text}
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Form;
