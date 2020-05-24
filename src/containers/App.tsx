import React, { useState, useEffect, useCallback } from 'react';

import Question from '../components/Question/Question';
import QuestionGenerator from '../services/QuestionGenerator';
import ResultSummary from '../components/ResultSummary/ResultSummary';
import './App.css';
import { QuestionModel } from '../types';

type AppProps = {
};

type AppState = {
  chosenAnswers: string[],
  hasSubmittedAnswers: boolean,
  chosenAnswersAreCorrect: boolean,
  question: QuestionModel,
  questionNumber: number
};

const App = (props: AppProps) => {
  const generateNewQuestion = (): QuestionModel => {
    return new QuestionGenerator().generateQuestion();
  }

  const [chosenAnswers, setChosenAnswers] = useState<string[]>([]);
  const [hasSubmittedAnswers, setHasSubmittedAnswers] = useState(false);
  const [chosenAnswersAreCorrect, setChosenAnswersAreCorrect] = useState(false);
  const [question, setQuestion] = useState<QuestionModel>(generateNewQuestion());
  const [questionNumber, setQuestionNumber] = useState(0);  

  const resetStateForNewQuestion = useCallback(() => {
    setChosenAnswers([]);
    setHasSubmittedAnswers(false);
    setChosenAnswersAreCorrect(false);
    setQuestion(generateNewQuestion());
    setQuestionNumber((prevState) => prevState + 1);
  }, [setChosenAnswers, setHasSubmittedAnswers, setChosenAnswersAreCorrect, setQuestion, setQuestionNumber]);

  useEffect(() => {
    resetStateForNewQuestion();
  }, [resetStateForNewQuestion]);

  const onAnswerClick = (e: React.FormEvent<HTMLInputElement>): void => {
    const chosenAnswer = e.currentTarget.value;
    const updatedChosenAnswers = question.isMultipleChoice ? 
      [...chosenAnswers] : 
      [];

    if (e.currentTarget.checked) {
      chosenAnswers.push(chosenAnswer);
    }
    else {
      chosenAnswers.splice(chosenAnswers.indexOf(chosenAnswer), 1);
    }
    
    setChosenAnswers(updatedChosenAnswers);
  };

  const onNextQuestionClick = (): void => {
    resetStateForNewQuestion();
  };

  const onSubmitAnswers = (): void => {
    let chosenAnswersAreCorrect = chosenAnswers.length === question.correctAnswers.length;
    for (const chosenAnswer of chosenAnswers) {
      if (!question.correctAnswers.includes(chosenAnswer)) {
        chosenAnswersAreCorrect = false;
      }
    }

    setChosenAnswersAreCorrect(chosenAnswersAreCorrect);
    setHasSubmittedAnswers(true);
  };

  const submitSection = hasSubmittedAnswers ? (
    <ResultSummary 
      key={'submit_' + questionNumber}
      question={question}
      chosenAnswersAreCorrect={chosenAnswersAreCorrect}
      onNextQuestionClick={onNextQuestionClick} />) :
    <button onClick={onSubmitAnswers}>Inleveren</button>

  return (
    <div className="main-content">
      <Question 
        key={'question_' + questionNumber}
        question={question}
        questionNumber={questionNumber}
        onAnswerClick={onAnswerClick} />

      {submitSection}
    </div>
  );
}

export default App;