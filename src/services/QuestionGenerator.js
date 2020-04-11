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
      name: "Dalteparine (Fragmin)",
      sideEffects: [
        "Haematoom op injectieplaats",
        "Bloedingen",
        "Overgevoeligheid",
      ],
    },
    {
      name: "Acenocoumarol (Sintrom)",
      sideEffects: ["Bloedingen", "Misselijkheid", "Diarree"],
    },
    {
      name: "Fenprocoumon (Marcoumar)",
      sideEffects: ["Bloedingen", "Misselijkheid", "Diarree"],
    },
    {
      name: "Konakion (Vitamine K)",
      sideEffects: ["Rood gelaat", "Hevig transpireren", "Cyanose"],
    },
    {
      name: "Carbasalaatcalcium (Ascal)",
      sideEffects: [
        "Overgevoeligheidsverschijnselen bij astma",
        "Verlengde bloedingstijd",
      ],
    },
    {
      name: "Prothrobine complex (Cofact)",
      sideEffects: ["Koorts", "Anafylactische shock", "Urticaria"],
    },
    {
      name: "Temazepam (Normison)",
      sideEffects: [
        "Slaperigheid (overdag)",
        "Emotionele afstomping",
        "Verwardheid",
      ],
    },
    {
      name: "Oxazepam (Seresta)",
      sideEffects: ["Slaperigheid", "Spierzwakte", "Duizeligheid"],
    },
    {
      name: "Codeïne",
      sideEffects: ["Misselijkheid", "Obstipatie", "Sufheid"],
    },
    {
      name: "Haloperidol (Haldol)",
      sideEffects: [
        "Slaperigheid",
        "Afvlakking gevoelsleven",
        "Obstipatie",
        "Droge mond",
      ],
    },
    {
      name: "Simvastine (Zocor)",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
    {
      name: "Atorvastatine (Lipitor)",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
    {
      name: "Pravastatine (Selektine)",
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