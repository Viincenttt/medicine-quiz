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

  getAllSideEffects = () => {
    const allSideEffectArrays = medicines.map((x) => x.sideEffects);
    const allSideEffects = [].concat.apply([], allSideEffectArrays);

    const distinctSideEffects = allSideEffects.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return distinctSideEffects;
  };

  generateQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(medicines);
    const allSideEffects = this.getAllSideEffects();

    const allAnswers = [...randomMedicine.sideEffects];
    while (allAnswers.length < 10) {
      const randomSideEffect = this.getRandomElementFromArray(allSideEffects);
      const isSideEffectAlreadyInAllAnswersArray = allAnswers.includes(
        randomSideEffect
      );
      const isSideEffectCorrectAnswer = randomMedicine.sideEffects.includes(
        randomSideEffect
      );

      if (!isSideEffectAlreadyInAllAnswersArray && !isSideEffectCorrectAnswer) {
        allAnswers.push(randomSideEffect);
      }
    }

    return {
      text: `Wat zijn de bijeffecten van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.sideEffects,
      allAnswers: this.shuffleArray(allAnswers),
    };
  };
}

export default QuestionGenerator;
