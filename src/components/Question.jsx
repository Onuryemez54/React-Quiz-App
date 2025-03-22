import { useEffect } from "react";
import { Options } from "./Options";

export const Question = ({
  question,
  dispatch,
  answer,
  index,
  numberOfQuestions,
}) => {
  useEffect(() => {
    document.title = `Question ${index + 1} / ${numberOfQuestions}`;
    return () => {
      document.title = "The React Quiz App";
    };
  }, [index, numberOfQuestions]);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options answer={answer} dispatch={dispatch} question={question} />
    </div>
  );
};
