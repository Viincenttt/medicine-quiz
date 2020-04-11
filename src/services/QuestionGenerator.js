class QuestionGenerator {
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
    {
      name: "Labetolol",
      brandName: "Trandate",
      sideEffects: [
        "Bradycardie",
        "Hypotensie",
        "Decompensatio",
        "Hoofdpijn",
        "Misselijkheid",
      ],
    },
    {
      name: "Losartan",
      brandName: "Cozaar",
      sideEffects: ["Duizeligheid", "Hoog kalium"],
    },
    {
      name: "Nifidepine",
      brandName: "Adalat",
      sideEffects: ["Obstipatie", "Misselijkheid", "Urineretentie"],
    },
    {
      name: "Bisoprolol",
      brandName: "Emcor",
      sideEffects: ["Bradycardie", "Hypotensie", "Verergering astma"],
    },
    {
      name: "Digoxine",
      brandName: "Lanoxin",
      sideEffects: ["Aritmieen", "Misselijkheid", "Duizeligheid"],
    },
    {
      name: "Diltiazem",
      brandName: "Tildiem",
      sideEffects: ["Obstipatie", "Misselijkheid", "Urineretentie"],
    },
    {
      name: "Enalapril",
      brandName: "Renitec",
      sideEffects: ["Duizeligheid", "Hoofdpijn", "Prikkelhoest"],
    },
    {
      name: "Isosorbide-Mononitraat",
      brandName: "Monocedo-card",
      sideEffects: [
        "Spier- en gewrichtspijn",
        "Hoofdpijn",
        "Maag-darmklachten",
      ],
    },
    {
      name: "Ramipril",
      brandName: "Tritace",
      sideEffects: ["Hypotensie", "Hoofdpijn", "Blozen"],
    },
    {
      name: "Sotalol",
      brandName: "Sotacor",
      sideEffects: ["Duizeligheid", "Hoofdpijn", "Prikkelhoest"],
    },
    {
      name: "Metropolol",
      brandName: "Selokeen",
      sideEffects: [
        "Bradycardie",
        "Hypotensie",
        "Verergering astma bronchiale",
      ],
    },
    {
      name: "Perinodpril",
      brandName: "Coversyl",
      sideEffects: [
        "Bradycardie",
        "Hypotensie",
        "Verergering astma bronchiale",
      ],
    },
    {
      name: "Furosemide",
      brandName: "Lasix",
      sideEffects: ["Hypokaliaemie", "Dehydratie", "Hoofdpijn"],
    },
    {
      name: "Bumetanide",
      brandName: "Burinex",
      sideEffects: ["Hypokaliaemie", "Dehydratie", "Hoofdpijn"],
    },
    {
      name: "Hydrochloor-thiazide",
      brandName: "Esidrex",
      sideEffects: ["Dehydratie", "Hoofdpijn", "Dorstgevoel"],
    },
    {
      name: "Spirinolacton",
      brandName: "Aldactone",
      sideEffects: ["Dehydratie", "Hoofdpijn", "Dorstgevoel"],
    },
    {
      name: "Pantoprazol",
      brandName: "Pantazol",
      sideEffects: ["Maag-darmklachten", "Hoofdpijn", "Misselijkheid"],
    },
    {
      name: "Antagel",
      brandName: null,
      sideEffects: ["Maag-darmklachten", "Niersteenvorming"],
    },
    {
      name: "Movicolon",
      brandName: "Macrogol",
      sideEffects: ["Opgeblazen gevoel", "Buikpijn"],
    },
    {
      name: "Lactulose",
      brandName: "Duphalac",
      sideEffects: ["Winderigheid", "Diarree"],
    },
    {
      name: "Loperamide",
      brandName: "Immodium",
      sideEffects: ["Misselijkheid", "Buikpijn", "Duizeligheid"],
    },
    {
      name: "Colex Klyx",
      brandName: null,
      sideEffects: ["Buikpijn", "Kramp", "Branderig gevoel anus"],
    },
    {
      name: "Metoclopramide",
      brandName: "Primperan",
      sideEffects: ["Slaperigheid", "Diarree", "Gevoel van zwakte"],
    },
    {
      name: "Bisacodyl",
      brandName: "Dulcolax",
      sideEffects: ["Buikkramp"],
    },
    {
      name: "Ranitidine",
      brandName: "Zantac",
      sideEffects: ["Maag- darmklachten", "Duizelig"],
    },
    {
      name: "Metformine",
      brandName: "Glucophage",
      sideEffects: [
        "Maag-darmklachten",
        "Verminderde eetlust",
        "Smaakstoornissen",
      ],
    },
    {
      name: "Glicazide",
      brandName: "Diamicron",
      sideEffects: ["Gewichtstoename", "Hypoglykemie", "Wazig zien"],
    },
    {
      name: "Novomix mengsel lang en snelwerkend",
      brandName: null,
      sideEffects: [
        "Hypoglykemie",
        "Overgevoeligheid",
        "Spuitplekken, hier niet prikken",
      ],
    },
    {
      name: "Novorapid kortwerkend",
      brandName: null,
      sideEffects: [
        "Hypoglykemie",
        "Overgevoeligheid",
        "Spuitplekken, hier niet prikken",
      ],
    },
    {
      name: "Lantus langwerkend",
      brandName: null,
      sideEffects: [
        "Hypoglykemie",
        "Overgevoeligheid",
        "Spuitplekken, hier niet prikken",
      ],
    },
    {
      name: "Glucose 40%",
      brandName: null,
      sideEffects: ["Hyperglycemie", "Hypoglykemie", "Leversteatose"],
    },
    {
      name: "Levothyroxine",
      brandName: "Thyrax",
      sideEffects: ["Diarree", "Nervositeit"],
    },
    {
      name: "Amoxicilline / Clavulaanzuur",
      brandName: "Augmentin",
      sideEffects: [
        "Maag-darm klachten",
        "Schimmel-of gistinfecties van de slijmvliezen",
      ],
    },
    {
      name: "Amoxicilline",
      brandName: "Clamoxyl",
      sideEffects: ["Maag-darm klachten", "Huiduitslag", "Jeuk"],
    },
    {
      name: "Ciprofloxaline",
      brandName: "Ciproxin",
      sideEffects: ["Maag-darm klachten", "Hoofdpijn", "Allergische reactie"],
    },
    {
      name: "Cefuroxim",
      brandName: "Zinacef",
      sideEffects: [
        "Tromboflebitis",
        "Misselijkheid",
        "Verhoging / koorts",
        "Diarree",
      ],
    },
    {
      name: "Ceftazidim",
      brandName: "Fortum",
      sideEffects: ["Huiduitslag", "Jeuk", "Diarree", "Misselijkheid"],
    },
    {
      name: "Floxapen",
      brandName: "Flucioxacilline / Stafoxil",
      sideEffects: ["Tromboflebitis", "Misselijkheid", "Braken"],
    },
    {
      name: "Piperacilline / Tazobacte",
      brandName: "Tazozin",
      sideEffects: ["Maag-darmklachten", "Huiduitslag", "Koorts"],
    },
    {
      name: "Meropenem",
      brandName: "Meronem",
      sideEffects: ["Trombocytemie", "Maag-darmklachten", "Hoofdpijn"],
    },
    {
      name: "Gentamycine",
      brandName: null,
      sideEffects: [
        "Neurotoxiciteit",
        "Gevoelloosheid",
        "Spierkrampen",
        "Om de dag dalspiegel prikken i.v.m. invloed op nierfunctie",
      ],
    },
    {
      name: "Metronidazol",
      brandName: "Flagyl",
      sideEffects: ["Maag-darmklachten", "Metaalsmaak", "Zweertjes in de mond"],
    },
    {
      name: "Vancomycine",
      brandName: null,
      sideEffects: ["Schimmelinfectie", "Huiduitslag"],
    },
    {
      name: "Nystatinez",
      brandName: null,
      sideEffects: ["Maag-darmklachten"],
    },
    {
      name: "Paracetamol",
      brandName: "Perfalgan",
      sideEffects: [
        "Medicijnafhankelijke hoofdpijn",
        "Overgevoeligheid",
        "Leverbeschadiging",
      ],
    },
    {
      name: "Diclofenac",
      brandName: "Voltaren",
      sideEffects: [
        "Maag-darmklachten",
        "Beschadiging van maag/darm",
        "Hoofdpijn",
      ],
    },
    {
      name: "Tramadol",
      brandName: "Tramal",
      sideEffects: ["Sufheid", "Misselijkheid", "Obstipatie"],
    },
    {
      name: "Oxycontin",
      brandName: null,
      sideEffects: ["Obstipatie", "Sufheid", "Maag-darmklachten"],
    },
    {
      name: "Oxycodon",
      brandName: "Oxynorm",
      sideEffects: ["Obstipatie", "Sufheid", "Maag-darmklachten"],
    },
    {
      name: "Morfine",
      brandName: null,
      sideEffects: ["Obstipatie", "Sufheid", "Maag-darmklachten"],
    },
    {
      name: "Fentanyl / Abstral / Instanyl",
      brandName: null,
      sideEffects: ["Obstipatie", "Sufheid", "Maag-darmklachten"],
    },
    {
      name: "Butylsco-polamine",
      brandName: "Buscopan",
      sideEffects: [
        "Toename hartfrequentie",
        "Droge mond",
        "Verstopping",
        "Kortademig",
      ],
    },
    {
      name: "Thiamine (Vitamine B1)",
      brandName: null,
      sideEffects: ["Overgevoeligheid, opslag"],
    },
    {
      name: "Alfacalcidol",
      brandName: "Etalpa",
      sideEffects: ["Hypercalciemie", "Hyperfosfatemie"],
    },
    {
      name: "Foliumzuur (Vitamine B11)",
      brandName: null,
      sideEffects: ["Zelden"],
    },
    {
      name: "Dianet",
      brandName: null,
      sideEffects: ["Geen"],
    },
    {
      name: "Hydroxoco-Balamine (Vitamine B12)",
      brandName: null,
      sideEffects: ["Allergische reactie, bijv. eczeem"],
    },
    {
      name: "Azathioprine",
      brandName: "Imuran",
      sideEffects: ["Misselijk", "Koorts", "Diarree"],
    },
    {
      name: "Mycofenolzuur",
      brandName: "Cellcept",
      sideEffects: [
        "Diarree",
        "Braken",
        "Virale en bacteriële schimmelinfectie",
      ],
    },
    {
      name: "Tacrolimus",
      brandName: null,
      sideEffects: ["Maagpijn", "Duizelig", "Hoofdpijn"],
    },
    {
      name: "Prednisolon",
      brandName: "Prednison",
      sideEffects: ["Hoofdpijn", "Duizelig", "Vochtretentie"],
    },
    {
      name: "Methyl-prednisolon",
      brandName: null,
      sideEffects: ["Duizeligheid", "Hoofdpijn", "Spierzwakte"],
    },
    {
      name: "Albumine",
      brandName: null,
      sideEffects: ["Hypertensie", "Zelden: Koorts, rillingen, braken"],
    },
    {
      name: "Mesalazine",
      brandName: "Pentasa",
      sideEffects: ["Maag-darmklachten", "Hoofdpijn", "Duizelig"],
    },
    {
      name: "Infliximab",
      brandName: "Remicade",
      sideEffects: [
        "Overgevoeligheidsreacties",
        "Dyspnoe",
        "Urticaria",
        "Hoofdpijn",
      ],
    },
    {
      name: "Natrium-polystyreen-sulfonaat",
      brandName: "Resonium",
      sideEffects: [
        "Irritatie van de maag",
        "Obstipatie",
        "Verminderde eetlust",
        "Hypernatriemie",
      ],
    },
    {
      name: "Calci-Chew Calci-Chew D3",
      brandName: null,
      sideEffects: ["Misselijkheid", "Braken", "Hoofdpijn"],
    },
    {
      name: "Sevelamer",
      brandName: "Renagel",
      sideEffects: ["Misselijk", "Braken", "Hoofdpijn"],
    },
    {
      name: "Aranesp",
      brandName: "Darbepoetine",
      sideEffects: [
        "Hypertensie",
        "Trombose van vasculaire toegangsplaats (fistel, shunt",
        "Hoofdpijn",
      ],
    },
    {
      name: "Ferricarboxy-Maltose",
      brandName: "Ferinject",
      sideEffects: [
        "Anafylactische reacties",
        "Hoofdpijn",
        "Allergische reacties",
      ],
    },
    {
      name: "Kaliumchloride",
      brandName: null,
      sideEffects: ["Tromboflebitis", "Hyperkaliemie"],
    },
    {
      name: "Colchicine",
      brandName: null,
      sideEffects: ["Maag-darmklachten", "Neuropathie", "Spierzwakte"],
    },
  ];

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
    const allSideEffectArrays = this.medicines.map((x) => x.sideEffects);
    const allSideEffects = [].concat.apply([], allSideEffectArrays);

    const distinctSideEffects = allSideEffects.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return distinctSideEffects;
  };

  generateQuestion = () => {
    const randomMedicine = this.getRandomElementFromArray(this.medicines);
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
      question: `Wat zijn de bijeffecten van ${randomMedicine.name}?`,
      correctAnswers: randomMedicine.sideEffects,
      allAnswers: this.shuffleArray(allAnswers),
    };
  };
}

export default QuestionGenerator;
