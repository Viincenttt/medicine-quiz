import React from 'react';
import Question from '../components/Question/Question';
import QuestionGenerator from '../services/QuestionGenerator';
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

  checkQuestionAnswers = () => {
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
    let result = (<button onClick={this.checkQuestionAnswers}>Inleveren</button>);
    if (this.state.hasSubmittedAnswers) {
      const correctAnswers = this.state.question.correctAnswers.join(', ');
      result = (
        <div>
          <p>
            {this.state.chosenAnswersAreCorrect ? 
              'Het antwoord was goed!' : 
              `Het antwoord is fout, het goede antwoord is: ${correctAnswers}` 
            }
          </p>
          <button onClick={this.onNextQuestionClick}>Volgende vraag</button>
        </div>
      );   
    }

    return (
      <div className="main-content">
        <Question 
          question={this.state.question}
          questionNumber={this.state.questionNumber}
          onAnswerClick={this.onAnswerClick} />
        {result}
      </div>
    );
  }
}

export default App;
