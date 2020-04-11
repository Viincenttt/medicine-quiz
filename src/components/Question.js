import React, { Component } from 'react';
import QuestionGenerator from '../services/QuestionGenerator';

class Question extends React.Component {  
    state = {
      questionText: '',
      correctAnswer: '',
      allAnswers: [''],
      chosenAnswer: '',
      chosenAnswerIsCorrect: false
    };
    
    generateNewQuestion = () => {
      const questionGenerator = new QuestionGenerator();
      const generatedQuestion = questionGenerator.generateQuestion();
  
      this.setState({
        questionText: generatedQuestion.question,
        correctAnswer: generatedQuestion.correctAnswer,
        allAnswers: generatedQuestion.allAnswers,
        chosenAnswer: '',
        chosenAnswerIsCorrect: false
      });    
    };
  
    componentDidMount() {    
      this.generateNewQuestion();
    };
    
    onAnswerClick = (e) => {
      const chosenAnswer = e.currentTarget.value;
      const chosenAnswerIsCorrect = chosenAnswer === this.state.correctAnswer;
      
      this.setState({
        chosenAnswer: chosenAnswer,
        chosenAnswerIsCorrect: chosenAnswerIsCorrect
      });    
    };
  
    onNextQuestionClick = () => {
      this.generateNewQuestion();
    }
  
    render() {
      const answerList = this.state.allAnswers.map(answer => {
        return (
          <div>
            <input key={answer} type="radio" name="side-effect-question" value={answer} onChange={this.onAnswerClick} />
            <span>{answer}</span>
          </div>
        )
      });
      
      const hasChosenAnswer = this.state.chosenAnswer !== '';
      const resultText = this.state.chosenAnswerIsCorrect ? 
        'Het antwoord was goed!' :
        `Het antwoord is fout, het goede antwoord is: ${this.state.correctAnswer}`
      let answerResult = '';
      if (hasChosenAnswer) {
        answerResult = (
          <div>
            {resultText}
            
            <div>
              <button onClick={this.onNextQuestionClick}>Volgende vraag</button>
            </div>
          </div>
        );
      }
      
      return (
        <div>
          <div>{this.state.questionText}</div>
          <div>
            {answerList}
          </div>
          {answerResult}
        </div>
      );
    }
  }

  export default Question;