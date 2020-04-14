import React from 'react';
import PropTypes from "prop-types";

function Submit(props) {
    let result = (<button onClick={props.onSubmitAnswers}>Inleveren</button>);
    if (props.hasSubmittedAnswers) {
      const correctAnswers = props.question.correctAnswers.join(', ');
      result = (
        <div class="fade-in">
          <p>
            {props.chosenAnswersAreCorrect ? 
              'Het antwoord was goed!' : 
              `Het antwoord is fout, het goede antwoord is: ${correctAnswers}` 
            }
          </p>
          <button onClick={props.onNextQuestionClick}>Volgende vraag</button>
        </div>
      );    
    }

    return result;
}

Submit.propTypes = {
  question: PropTypes.object,
  hasSubmittedAnswers: PropTypes.bool,
  chosenAnswersAreCorrect: PropTypes.bool,
  onNextQuestionClick: PropTypes.func,
  onSubmitAnswers: PropTypes.func
};

export default Submit;