import React from "react";
import "./Question.css";

class Question extends React.Component {
  render() {
    if (this.props.question === null) {
      return "";
    }

    const answerList = this.props.question.allAnswers.map((answer, index) => {
      return (
        <li key={this.props.questionNumber + "_" + index}>
          <input
            id={this.props.questionNumber + "_" + index}
            type="checkbox"
            name="side-effect-answers"
            value={answer}
            onChange={this.props.onAnswerClick}
          />
          <label htmlFor={this.props.questionNumber + "_" + index}>
            {answer}
          </label>
        </li>
      );
    });

    return (
      <div>
        <h2>{this.props.question.text}</h2>
        <ul>{answerList}</ul>
      </div>
    );
  }
}

export default Question;
