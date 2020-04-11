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
    const allValues = [].concat.apply([], array);
    const distinctValues = allValues.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return distinctValues;
  };

  getAllSideEffects = () => {
    const allSideEffects = [].concat.apply([], medicines.map((x) => x.sideEffects));
    return this.getDistinctValues(allSideEffects);
  };

  getAllMedicineBrands = () => {
    return this.getDistinctValues(medicines
      .filter(x => x !== null)
      .map((x) => x.brandName)
    );
  };

  generateAnswers = (correctAnswers, allPossibleAnswers, minimumNumberOfAnswers) => {
    const allAnswers = [...correctAnswers];
    while (allAnswers.length < minimumNumberOfAnswers) {
      const randomAnswer = this.getRandomElementFromArray(allPossibleAnswers);
      const isAnswerAlreadyInArray = allAnswers.includes(randomAnswer);

      if (!isAnswerAlreadyInArray) {
        allAnswers.push(randomAnswer);
      }
    }

    return this.shuffleArray(allAnswers);
  };

  generateRandomSideEffectsQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(medicines);
    const allAnswers = this.generateAnswers(randomMedicine.sideEffects, this.getAllSideEffects(), 10);

    return {
      text: `Wat zijn de bijeffecten van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.sideEffects,
      allAnswers: allAnswers,
    };
  };

  generateRandomMedicineBrandsQuestion = () => {
    const medicinesWithBrandName = medicines.filter(x => x.brandName !== null);
    const randomMedicine = this.getRandomElementFromArray(medicinesWithBrandName);
    const allAnswers = this.generateAnswers([randomMedicine.brandName], this.getAllMedicineBrands(), 5);
    
    return {
      text: `Wat is het merk van ${randomMedicine.name}?`,
      correctAnswers: [randomMedicine.brandName],
      allAnswers: allAnswers,
    };
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