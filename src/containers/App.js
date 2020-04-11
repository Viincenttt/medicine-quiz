import React from 'react';
import Question from '../components/Question/Question';
import QuestionGenerator from '../services/QuestionGenerator';
import Submit from '../components/Submit/Submit';
import './App.css';

class App extends React.Component {
  state = {
    question: null,
    chosenAnswers: [],
    hasSubmittedAnswers: false,
    chosenAnswersAreCorrect: false,
    questionNumber: 0
  };

  generateNewQuestion = () => {
    const questionGenerator = new QuestionGenerator();
    const generatedQuestion = questionGenerator.generateQuestion();
    console.log(generatedQuestion.correctAnswers);
    this.setState({
      question: generatedQuestion,
      chosenAnswers: [],
      hasSubmittedAnswers: false,
      chosenAnswersAreCorrect: false,
      questionNumber: this.state.questionNumber + 1
    });
  };

  onAnswerClick = (e) => {
    const chosenAnswer = e.currentTarget.value;
    const chosenAnswers = [...this.state.chosenAnswers];

    if (e.currentTarget.checked) {
      chosenAnswers.push(chosenAnswer);
    }
    else {
      chosenAnswers.splice(chosenAnswers.indexOf(chosenAnswer), 1);
    }
    
    this.setState({chosenAnswers: chosenAnswers});
  };

  onNextQuestionClick = () => {
    this.generateNewQuestion();
  };

  onSubmitAnswers = () => {
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

  componentDidMount() {    
    this.generateNewQuestion();
  };  

  render() {
    return (
      <div className="main-content">
        <Question 
          question={this.state.question}
          questionNumber={this.state.questionNumber}
          onAnswerClick={this.onAnswerClick} />

        <Submit 
          question={this.state.question}
          hasSubmittedAnswers={this.state.hasSubmittedAnswers}
          chosenAnswersAreCorrect={this.state.chosenAnswersAreCorrect}
          onNextQuestionClick={this.onNextQuestionClick}
          onSubmitAnswers={this.onSubmitAnswers} />
      </div>
    );
  }
}

export default App;
