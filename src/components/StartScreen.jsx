import { useQuiz, useQuizDispatch } from "../context/QuizProvider";
import { playSound } from "../utils/playSound";

export const StartScreen = () => {
  const { questions } = useQuiz();
  const dispatch = useQuizDispatch();

  const numberOfQuestions = questions.length;

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numberOfQuestions} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          playSound("/click.mp3");
          dispatch({ type: "start" });
        }}
      >
        Let's start
      </button>
    </div>
  );
};
