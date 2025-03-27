import { useEffect } from "react";
import { useQuiz, useQuizDispatch } from "../context/QuizProvider";

export const Timer = () => {
  const { secondRemaining } = useQuiz();
  const dispatch = useQuizDispatch();

  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"} {mins} : {secs < 10 && "0"} {secs}
    </div>
  );
};
