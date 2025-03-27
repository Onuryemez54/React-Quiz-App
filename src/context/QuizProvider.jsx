import { createContext, useContext, useReducer } from "react";

const SECS_PER_QUESTION = 30;

const initialStateContext = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  yourAnswers: [],
  points: 0,
  highscore: 0,
  secondRemaining: null,
};

const QuizContext = createContext();
const QuizDispatchContext = createContext();

export const QuizProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState ?? initialStateContext
  );

  return (
    <QuizContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      const isCorrect = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
        yourAnswers: [
          ...state.yourAnswers,
          state.index + 1 + "." + question.options[action.payload],
        ],
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialStateContext,
        status: "ready",
        questions: state.questions,
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid action type");
  }
};

export const useQuiz = () => useContext(QuizContext);
export const useQuizDispatch = () => useContext(QuizDispatchContext);
