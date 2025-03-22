export const Progress = ({
  index,
  numberOfQuestions,
  points,
  totalPoints,
  answer,
}) => {
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
