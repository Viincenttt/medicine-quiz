import medicines from './medicine-data.json';

class QuestionGenerator { 
  getRandomElementFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  getDistinctValues = (array) => {
    const distinctValues = array.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return distinctValues;
  };

  getAllSideEffects = () => {
    const allSideEffects = [].concat.apply([], medicines.map((x) => x.sideEffects));
    return this.getDistinctValues(allSideEffects);
  };

  getAllMedicineBrands = () => {
    const allMedicineBrands = medicines.map((x) => x.brandName);
    return this.getDistinctValues(allMedicineBrands
      .filter(x => x !== null)
    );
  };

  generateAnswers = (correctAnswers, allPossibleAnswers, minimumNumberOfAnswers) => {
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

  generateRandomQuestion = (options) => {    
    const questionAnswers = this.generateAnswers(options.correctAnswers, options.listOfPossibleAnswers, options.totalNumberOfAnswers);
    return {
      text: options.text,
      correctAnswers: options.correctAnswers,
      questionAnswers: questionAnswers,
      isMultipleChoice: options.isMultipleChoice
    };
  };

  generateRandomSideEffectsQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(medicines);

    return this.generateRandomQuestion({
      text: `Wat zijn de bijeffecten van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.sideEffects,
      listOfPossibleAnswers: this.getAllSideEffects(),
      totalNumberOfAnswers: 8,
      isMultipleChoice: true
    });
  };

  generateRandomMedicineBrandsQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(medicines.filter(x => x.brandName !== null));
    
    return this.generateRandomQuestion({
      text: `Wat is het merk van ${randomMedicine.name}?`,
      correctAnswers: [randomMedicine.brandName],
      listOfPossibleAnswers: this.getAllMedicineBrands(),
      totalNumberOfAnswers: 5,
      isMultipleChoice: false
    });
  };

  generateQuestion = () => {
    const chance = Math.random();
    if (chance < 0.7) {
      return this.generateRandomSideEffectsQuestion();
    }

    return this.generateRandomMedicineBrandsQuestion();
  };
}

export default QuestionGenerator;