class QuestionGenerator {
  sideEffects = [
    "Hoofdpijn",
    "Misselijkheid",
    "Obstipatie",
    "Duizeligheid",
    "Blozen",
    "Hypotensie",
    "Urineretentie",
    "Aritmieen",
    "Bradycardie",
    "Haematoom op injectieplaats",
    "Overgevoeligheid",
    "Diarree",
  ];

  medicines = [
    {
      name: "Dalteparine",
      brandName: "Fragmin",
      sideEffects: [
        "Haematoom op injectieplaats",
        "Bloedingen",
        "Overgevoeligheid",
      ],
    },
    {
      name: "Acenocoumarol",
      brandName: "Sintrom",
      sideEffects: ["Bloedingen", "Misselijkheid", "Diarree"],
    },
    {
      name: "Fenprocoumon",
      brandName: "Marcoumar",
      sideEffects: ["Bloedingen", "Misselijkheid", "Diarree"],
    },
    {
      name: "Konakion",
      brandName: "Vitamine K",
      sideEffects: ["Rood gelaat", "Hevig transpireren", "Cyanose"],
    },
    {
      name: "Carbasalaatcalcium",
      brandName: "Ascal",
      sideEffects: [
        "Overgevoeligheidsverschijnselen bij astma",
        "Verlengde bloedingstijd",
      ],
    },
    {
      name: "Prothrobine complex",
      brandName: "Cofact",
      sideEffects: ["Koorts", "Anafylactische shock", "Urticaria"],
    },
    {
      name: "Temazepam",
      brandName: "Normison",
      sideEffects: [
        "Slaperigheid (overdag)",
        "Emotionele afstomping",
        "Verwardheid",
      ],
    },
    {
      name: "Oxazepam",
      brandName: "Seresta",
      sideEffects: ["Slaperigheid", "Spierzwakte", "Duizeligheid"],
    },
    {
      name: "Codeïne",
      brandName: null,
      sideEffects: ["Misselijkheid", "Obstipatie", "Sufheid"],
    },
    {
      name: "Haloperidol",
      brandName: "Haldol",
      sideEffects: [
        "Slaperigheid",
        "Afvlakking gevoelsleven",
        "Obstipatie",
        "Droge mond",
      ],
    },
    {
      name: "Simvastine",
      brandName: "Zocor",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
    {
      name: "Atorvastatine",
      brandName: "Lipitor",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
    {
      name: "Pravastatine",
      brandName: "Selektine",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
  ];

  getRandomElementFromArray = (data) => {
    return data[Math.floor(Math.random() * data.length)];
  };

  generateQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(this.medicines);
    const randomCorrectSideEffect = this.getRandomElementFromArray(
      randomMedicine.sideEffects
    );

    const allAnswers = [randomCorrectSideEffect];
    while (allAnswers.length < 4) {
      const randomSideEffect = this.getRandomElementFromArray(this.sideEffects);
      if (
        !allAnswers.includes(randomSideEffect) &&
        !randomMedicine.sideEffects.includes(randomSideEffect)
      ) {
        allAnswers.push(randomSideEffect);
      }
    }

    return {
      question: `Wat zijn de bijeffecten van ${randomMedicine.name}`,
      correctAnswer: randomCorrectSideEffect,
      allAnswers: allAnswers,
    };
  };
}

export default QuestionGenerator;