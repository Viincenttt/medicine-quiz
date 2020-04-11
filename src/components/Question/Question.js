import React from "react";
import "./Question.css";

function Question (props) {
  if (props.question === null) {
    return "";
  }

  const answerList = props.question.allAnswers.map((answer, index) => {
    return (
      <li key={props.questionNumber + "_" + index}>
        <input
          id={props.questionNumber + "_" + index}
          type="checkbox"
          name="side-effect-answers"
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
    <div>
      <h2>{props.question.text}</h2>
      <ul>{answerList}</ul>
    </div>
  );
}

export default Question;
