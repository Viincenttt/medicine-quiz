import React from "react";

import "./Question.css";
import { QuestionModel } from "../../types";

type QuestionProps = {
  question: QuestionModel,
  questionNumber: number,
  onAnswerClick: (event: React.FormEvent<HTMLInputElement>) => void
};

export const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const questionType = props.question.isMultipleChoice ? 'checkbox' : 'radio';
  const answerList = props.question.questionAnswers.map((answer, index) => {   
    return (
      <li key={props.questionNumber + "_" + index}>
        <input
          id={props.questionNumber + "_" + index}
          type={questionType}
          name="question-answers"
          value={answer}
          onChange={props.onAnswerClick}
        />

        <label htmlFor={props.questionNumber + "_" + index}>
          {answer}
        </label>
      </li>
    );
  });

  return (
    <div className="question fade-in">
      <h2>{props.question.text}</h2>
      <ul>{answerList}</ul>
    </div>
  );
}

export default Question;
