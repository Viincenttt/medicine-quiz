import React from 'react';
import QuestionGenerator from '../services/QuestionGenerator';
import './Question.css';

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
      for (const chosenAnswer of this.state.chosenAnswers) {
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
      const answerList = this.state.allAnswers.map((answer, index) => {
        return (
          <li key={this.state.questionNumber + '_' + index}>
            <input id={this.state.questionNumber + '_' + index} type="checkbox" name="side-effect-answers" value={answer} onChange={this.onAnswerClick} />
            <label htmlFor={this.state.questionNumber + '_' + index}>{answer}</label>
          </li>
        )
      });
      
      let result = (<button onClick={this.checkQuestionAnswers}>Inleveren</button>);
      if (this.state.hasSubmittedAnswers) {
        const correctAnswers = this.state.correctAnswers.join(', ');
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
        <div className="question">
          <h2>{this.state.questionText}</h2>
          <ul>
            {answerList}              
          </ul>
          {result}
        </div>
      );
    }
  }

  export default Question;