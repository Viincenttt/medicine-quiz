import React from 'react';
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

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      ...this.generateStateForNewQuestion(0),
      questionNumber: 0
    } as AppState
  }

  generateStateForNewQuestion = (questionNumber: number): AppState => {
    return {
      chosenAnswers: [],
      hasSubmittedAnswers: false,
      chosenAnswersAreCorrect: false,
      question: this.generateNewQuestion(),
      questionNumber: questionNumber
    };
  };

  generateNewQuestion = (): QuestionModel => {
    return new QuestionGenerator().generateQuestion();
  }

  onAnswerClick = (e: React.FormEvent<HTMLInputElement>): void => {
    const chosenAnswer = e.currentTarget.value;
    const chosenAnswers = this.state.question.isMultipleChoice ? 
      [...this.state.chosenAnswers] : 
      [];

    if (e.currentTarget.checked) {
      chosenAnswers.push(chosenAnswer);
    }
    else {
      chosenAnswers.splice(chosenAnswers.indexOf(chosenAnswer), 1);
    }
    
    this.setState({chosenAnswers: chosenAnswers});
  };

  onNextQuestionClick = (): void => {
    this.setState(this.generateStateForNewQuestion(this.state.questionNumber + 1));
  };

  onSubmitAnswers = (): void => {
    let chosenAnswersAreCorrect = this.state.chosenAnswers.length === this.state.question.correctAnswers.length;
    for (const chosenAnswer of this.state.chosenAnswers) {
      if (!this.state.question.correctAnswers.includes(chosenAnswer)) {
        chosenAnswersAreCorrect = false;
      }
    }

    this.setState({ 
      chosenAnswersAreCorrect: chosenAnswersAreCorrect,
      hasSubmittedAnswers: true
    });
  };

  render() : JSX.Element {
    const submitSection = this.state.hasSubmittedAnswers ? 
      (<ResultSummary 
          key={'submit_' + this.state.questionNumber}
          question={this.state.question}
          chosenAnswersAreCorrect={this.state.chosenAnswersAreCorrect}
          onNextQuestionClick={this.onNextQuestionClick} />) :
        <button onClick={this.onSubmitAnswers}>Inleveren</button>

    return (
      <div className="main-content">
        <Question 
          key={'question_' + this.state.questionNumber}
          question={this.state.question}
          questionNumber={this.state.questionNumber}
          onAnswerClick={this.onAnswerClick} />

        {submitSection}
      </div>
    );
  }
}

export default App;