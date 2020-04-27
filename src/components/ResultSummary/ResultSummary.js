import React from 'react';
import PropTypes from "prop-types";

function ResultSummary(props) {
    const correctAnswers = props.question.correctAnswers.join(', ');
    const resultText = props.chosenAnswersAreCorrect ?
        'Het antwoord was goed!' : 
        `Het antwoord is fout, het goede antwoord is: ${correctAnswers}`;        

    return (
        <div className="fade-in">
          <p>
            {resultText}
          </p>
          <button onClick={props.onNextQuestionClick}>Volgende vraag</button>
        </div>
    );    
}

ResultSummary.propTypes = {
  question: PropTypes.object,
  chosenAnswersAreCorrect: PropTypes.bool,
  onNextQuestionClick: PropTypes.func
};

export default ResultSummary;