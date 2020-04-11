import React from 'react';

function Submit(props) {
    let result = (<button onClick={props.onSubmitAnswers}>Inleveren</button>);
    if (props.hasSubmittedAnswers) {
      const correctAnswers = props.question.correctAnswers.join(', ');
      result = (
        <div>
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

export default Submit;