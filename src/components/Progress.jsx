import { useQuiz } from "../context/QuizProvider";

export const Progress = () => {
  const { index, answer, points, questions } = useQuiz();

  const numberOfQuestions = questions.length;
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  return (
    <div className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numberOfQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}{" "}
      </p>
      <p>
        {" "}
        <strong>{points}</strong> / {totalPoints}
      </p>
    </div>
  );
};
