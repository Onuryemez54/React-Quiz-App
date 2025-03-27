import { useQuiz, useQuizDispatch } from "../context/QuizProvider";
import { playSound } from "../utils/playSound";

export const NextButton = () => {
  const { index, answer, questions } = useQuiz();
  const dispatch = useQuizDispatch();

  const numberOfQuestions = questions.length;

  if (answer === null) return null;

  if (index < numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          playSound("/click.mp3");
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  if (index === numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          playSound("/click.mp3");
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
};
