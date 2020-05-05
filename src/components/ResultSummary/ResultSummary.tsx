import React from 'react';
import { QuestionModel } from '../../types';

type ResultSummaryProps = {
  question: QuestionModel,
  chosenAnswersAreCorrect: boolean,
  onNextQuestionClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const ResultSummary: React.FC<ResultSummaryProps> = (props: ResultSummaryProps) => {
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
};

export default ResultSummary;