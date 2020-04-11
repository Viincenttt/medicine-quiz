import React, { Component } from 'react';
import QuestionGenerator from '../services/QuestionGenerator';

class Question extends React.Component {  
    state = {
      questionText: '',
      correctAnswers: [],
      allAnswers: [],
      chosenAnswers: [],
      hasSubmittedAnswers: false,
      chosenAnswersAreCorrect: false,
      questionNumber: 0
    };
    
    generateNewQuestion = () => {
      const questionGenerator = new QuestionGenerator();
      const generatedQuestion = questionGenerator.generateQuestion();
  
      this.setState({
        questionText: generatedQuestion.question,
        correctAnswers: generatedQuestion.correctAnswers,
        allAnswers: generatedQuestion.allAnswers,
        chosenAnswers: [],
        hasSubmittedAnswers: false,
        chosenAnswersAreCorrect: false,
        questionNumber: this.state.questionNumber + 1
      });
    };
  
    componentDidMount() {    
      this.generateNewQuestion();
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
      let chosenAnswersAreCorrect = this.state.chosenAnswers.length === this.state.correctAnswers.length;
      for (const chosenAnswer in this.state.chosenAnswers) {
        if (!this.state.correctAnswers.includes(chosenAnswer)) {
          chosenAnswersAreCorrect = false;
        }
      }

      this.setState({ 
        chosenAnswersAreCorrect: chosenAnswersAreCorrect,
        hasSubmittedAnswers: true
      });
    };
  
    render() {
      const answerList = this.state.allAnswers.map(answer => {
        return (
          <div key={this.state.questionNumber + '_' + answer}>
            <input type="checkbox" name="side-effect-answers" value={answer} onChange={this.onAnswerClick} />
            <span>{answer}</span>
          </div>
        )
      });
      
      let result = (<button onClick={this.checkQuestionAnswers}>Submit</button>);
      if (this.state.hasSubmittedAnswers) {
        result = (
          <div>
            {this.state.chosenAnswersAreCorrect ? 
              'Het antwoord was goed!' : 
              `Het antwoord is fout, het goede antwoord is: ${this.state.correctAnswers}` 
            }
            <button onClick={this.onNextQuestionClick}>Volgende vraag</button>
          </div>
        );   
      }
      
      return (
        <div>
          <div>{this.state.questionText}</div>
          <div>
            {answerList}
            {result}       
          </div>
        </div>
      );
    }
  }

  export default Question;