import { useEffect } from "react";
import { Options } from "./Options";
import { useQuiz } from "../context/QuizProvider";

export const Question = () => {
  const { questions, index } = useQuiz();

  const question = questions[index];
  const numberOfQuestions = questions.length;

  useEffect(() => {
    document.title = `Question ${index + 1} / ${numberOfQuestions}`;
    return () => {
      document.title = "The React Quiz App";
    };
  }, [index, numberOfQuestions]);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
};
