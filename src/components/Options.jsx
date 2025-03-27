import { useEffect } from "react";
import { playSound } from "../utils/playSound";
import { useQuiz, useQuizDispatch } from "../context/QuizProvider";

export const Options = () => {
  const { questions, answer, index } = useQuiz();
  const dispatch = useQuizDispatch();

  const question = questions[index];

  const hasAnswered = answer !== null;

  useEffect(() => {
    if (hasAnswered) {
      const isCorrect = answer === question.correctOption;
      if (isCorrect) {
        playSound("/correct.mp3");
      } else {
        playSound("/failed.mp3");
      }
    }
  }, [answer, hasAnswered, question.correctOption]);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
