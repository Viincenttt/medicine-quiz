import medicines from './medicine-data';
import { GenerateQuestionOptions, QuestionModel } from '../types/index';

class QuestionGenerator { 
  private getRandomElementFromArray<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
  };

  
  private shuffleArray<T>(array: Array<T>): Array<T> {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  private getDistinctValues<T>(array: Array<T>): Array<T> {
    const distinctValues = array.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return distinctValues;
  };

  private getAllSideEffects = (): string[] => {
    const allSideEffects = ([] as string[]).concat.apply([], medicines.map((x) => x.sideEffects));
    return this.getDistinctValues(allSideEffects);
  };

  private getAllMedicineBrands = (): string[] => {
    const allMedicineBrands: string[] = medicines.map((x) => x.brandName).filter(x => x !== null).map(x => x as string);
    return this.getDistinctValues(allMedicineBrands);
  };

  private getAllEffects = (): string[] => {
    const allEffects = ([] as string[]).concat.apply([], medicines.map((x) => x.effects));
    return this.getDistinctValues(allEffects);
  }

  private generateAnswers = (correctAnswers:string[], allPossibleAnswers:string[], minimumNumberOfAnswers:number): string[] => {
    const questionAnswers = [...correctAnswers];
    while (questionAnswers.length < minimumNumberOfAnswers) {
      const randomAnswer = this.getRandomElementFromArray(allPossibleAnswers);
      const isAnswerAlreadyInArray = questionAnswers.includes(randomAnswer);

      if (!isAnswerAlreadyInArray) {
        questionAnswers.push(randomAnswer);
      }
    }

    return this.shuffleArray(questionAnswers);
  };

  private generateRandomQuestion = (options: GenerateQuestionOptions): QuestionModel => {    
    const questionAnswers = this.generateAnswers(options.correctAnswers, options.listOfPossibleAnswers, options.totalNumberOfAnswers);
    return {
      text: options.text,
      correctAnswers: options.correctAnswers,
      questionAnswers: questionAnswers,
      isMultipleChoice: options.isMultipleChoice
    };
  };

  private generateRandomSideEffectsQuestion = (): QuestionModel => {
    const randomMedicine = this.getRandomElementFromArray(medicines);

    return this.generateRandomQuestion({
      text: `Wat zijn de bijeffecten van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.sideEffects,
      listOfPossibleAnswers: this.getAllSideEffects(),
      totalNumberOfAnswers: 8,
      isMultipleChoice: true
    });
  };

  private generateRandomMedicineBrandsQuestion = (): QuestionModel => {
    const randomMedicine = this.getRandomElementFromArray(medicines.filter(x => x.brandName !== null));
    
    return this.generateRandomQuestion({
      text: `Wat is het merk van ${randomMedicine.name}?`,
      correctAnswers: [randomMedicine.brandName as string],
      listOfPossibleAnswers: this.getAllMedicineBrands(),
      totalNumberOfAnswers: 5,
      isMultipleChoice: false
    });
  };

  private generateRandomMedicineEffectsQuestion = (): QuestionModel => {
    const randomMedicine = this.getRandomElementFromArray(medicines);

    return this.generateRandomQuestion({
      text: `Wat is de werking van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.effects,
      listOfPossibleAnswers: this.getAllEffects(),
      totalNumberOfAnswers: 6,
      isMultipleChoice: true
    });
  };

  public generateQuestion = (): QuestionModel => {
    const chance = Math.random();
    if (chance < 0.4) {
      return this.generateRandomSideEffectsQuestion();
    }
    else if (chance < 0.8) {
      return this.generateRandomMedicineEffectsQuestion();
    }

    return this.generateRandomMedicineBrandsQuestion();
  };
}

export default QuestionGenerator;