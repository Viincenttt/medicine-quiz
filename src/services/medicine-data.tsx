import { MedicineModel } from "../types"

export const medicines: MedicineModel[] =
[
  {
    "name": "Dalteparine",
    "brandName": "Fragmin",
    "effects": ["Antistolling"],
    "sideEffects": [
      "Haematoom op injectieplaats",
      "Bloedingen",
      "Overgevoeligheid"
    ]
  },
  {
    "name": "Acenocoumarol",
    "brandName": "Sintrom",
    "effects": ["Antistolling"],
    "sideEffects": ["Bloedingen", "Misselijkheid", "Diarree"]
  },
  {
    "name": "Fenprocoumon",
    "brandName": "Marcoumar",
    "effects": ["Antistolling"],
    "sideEffects": ["Bloedingen", "Misselijkheid", "Diarree"]
  },
  {
    "name": "Konakion",
    "brandName": "Vitamine K",
    "effects": ["Bloedstolling"],
    "sideEffects": ["Rood gelaat", "Hevig transpireren", "Cyanose"]
  },
  {
    "name": "Carbasalaatcalcium",
    "brandName": "Ascal",
    "effects": ["Voorkomt samenklontering van bloedplaatjes"],
    "sideEffects": [
      "Overgevoeligheidsverschijnselen bij astma",
      "Verlengde bloedingstijd"
    ]
  },
  {
    "name": "Prothrobine complex",
    "brandName": "Cofact",
    "effects": ["Bloedstolling"],
    "sideEffects": ["Koorts", "Anafylactische shock", "Urticaria"]
  },
  {
    "name": "Temazepam",
    "brandName": "Normison",
    "effects": [
      "Rustgevend",
      "Spierontspannend",
      "Vermindert angst",
      "Inslaper"
    ],
    "sideEffects": [
      "Slaperigheid (overdag)",
      "Emotionele afstomping",
      "Verwardheid"
    ]
  },
  {
    "name": "Oxazepam",
    "brandName": "Seresta",
    "effects": [
      "Rustgevend",
      "Spierontspannend",
      "Maakt suf",
      "Vermindert angst"
    ],
    "sideEffects": ["Slaperigheid", "Spierzwakte", "Duizeligheid"]
  },
  {
    "name": "Codeïne",
    "brandName": null,
    "effects": ["Onderdrukt hoestprikkel", "Lichte pijnstiller"],
    "sideEffects": ["Misselijkheid", "Obstipatie", "Sufheid"]
  },
  {
    "name": "Haloperidol",
    "brandName": "Haldol",
    "effects": ["Tegen psychose", "Hardnekkige hik", "Misselijkheid"],
    "sideEffects": [
      "Slaperigheid",
      "Afvlakking gevoelsleven",
      "Obstipatie",
      "Droge mond"
    ]
  },
  {
    "name": "Simvastine",
    "brandName": "Zocor",
    "effects": [
      "Remt aanmaak vet in de lever ",
      "Verlaagt vetgehalte in het bloed"
    ],
    "sideEffects": ["Spier- en gewrichtspijn", "Hoofdpijn", "Maag-darmklachten"]
  },
  {
    "name": "Atorvastatine",
    "brandName": "Lipitor",
    "effects": [
      "Remt aanmaak vet in de lever ",
      "Verlaagt vetgehalte in het bloed"
    ],
    "sideEffects": ["Spier- en gewrichtspijn", "Hoofdpijn", "Maag-darmklachten"]
  },
  {
    "name": "Pravastatine",
    "brandName": "Selektine",
    "effects": [
      "Remt aanmaak vet in de lever ",
      "Verlaagt vetgehalte in het bloed"
    ],
    "sideEffects": ["Spier- en gewrichtspijn", "Hoofdpijn", "Maag-darmklachten"]
  },
  {
    "name": "Labetolol",
    "brandName": "Trandate",
    "effects": [
      "Bètablokker",
      "Vertraagt hartslag",
      "Vermindert zuurstofbehoefte van het hart"
    ],
    "sideEffects": [
      "Bradycardie",
      "Hypotensie",
      "Decompensatio",
      "Hoofdpijn",
      "Misselijkheid"
    ]
  },
  {
    "name": "Losartan",
    "brandName": "Cozaar",
    "effects": [
      "RAS-remmer",
      "Verbetert de pomp functie",
      "Voorkomt nierbeschadiging",
      "Tegen vaatvernauwing"
    ],
    "sideEffects": ["Duizeligheid", "Hoog kalium"]
  },
  {
    "name": "Nifidepine",
    "brandName": "Adalat",
    "effects": [
      "Verlaagt contractiekracht van het hart en bloeddruk",
      "Spierverslappend"
    ],
    "sideEffects": ["Obstipatie", "Misselijkheid", "Urineretentie"]
  },
  {
    "name": "Bisoprolol",
    "brandName": "Emcor",
    "effects": ["Bètablokker: zorgt dat het hart rustiger gaat kloppen"],
    "sideEffects": ["Bradycardie", "Hypotensie", "Verergering astma"]
  },
  {
    "name": "Digoxine",
    "brandName": "Lanoxin",
    "effects": ["Verlaagt de pols en zorg voor regelmatige hartslag"],
    "sideEffects": ["Aritmieen", "Misselijkheid", "Duizeligheid"]
  },
  {
    "name": "Diltiazem",
    "brandName": "Tildiem",
    "effects": ["Verlaagt contractiekracht van het hart", "Verlaagt bloeddruk"],
    "sideEffects": ["Obstipatie", "Misselijkheid", "Urineretentie"]
  },
  {
    "name": "Enalapril",
    "brandName": "Renitec",
    "effects": ["ACE remmer", "Verlaagt bloeddruk en verbetert de pompkracht"],
    "sideEffects": ["Duizeligheid", "Hoofdpijn", "Prikkelhoest"]
  },
  {
    "name": "Isosorbide-Mononitraat",
    "brandName": "Monocedo-card",
    "effects": ["Vaatverwijdend"],
    "sideEffects": ["Hypotensie", "Hoofdpijn", "Blozen"]
  },
  {
    "name": "Ramipril",
    "brandName": "Tritace",
    "effects": ["ACE-remmer", "Verlaagt de bloeddruk en betert de pompkracht"],
    "sideEffects": ["Duizeligheid", "Hoofdpijn", "Prikkelhoest"]
  },
  {
    "name": "Sotalol",
    "brandName": "Sotacor",
    "effects": [
      "Verlaagt de pols",
      "Regelmatige hartslag",
      "Lagere bloeddruk",
      "Belasting van hart is minder"
    ],
    "sideEffects": ["Bradycardie", "Hypotensie", "Verergering astma bronchiale"]
  },
  {
    "name": "Metropolol",
    "brandName": "Selokeen",
    "effects": [
      "Rustig kloppen hart",
      "Lagere bloeddruk",
      "Minder belasting hart"
    ],
    "sideEffects": ["Bradycardie", "Hypotensie", "Verergering astma bronchiale"]
  },
  {
    "name": "Perinodpril",
    "brandName": "Coversyl",
    "effects": ["ACE-remmer", "Verlaagt bloeddruk", "Verbetert pompkracht"],
    "sideEffects": ["Hypotensie", "Prikkelhoest", "Jeuk"]
  },
  {
    "name": "Furosemide",
    "brandName": "Lasix",
    "effects": [
      "Vermindert hoeveelheid circulerend volume",
      "Verlaagt bloeddruk"
    ],
    "sideEffects": ["Hypokaliaemie", "Dehydratie", "Hoofdpijn"]
  },
  {
    "name": "Bumetanide",
    "brandName": "Burinex",
    "effects": [
      "Vermindert hoeveelheid circulerend volume",
      "Verlaagt bloeddruk"
    ],
    "sideEffects": ["Hypokaliaemie", "Dehydratie", "Hoofdpijn"]
  },
  {
    "name": "Hydrochloor-thiazide",
    "brandName": "Esidrex",
    "effects": [
      "Vermindert hoeveelheid circulerend volume",
      "Verlaagt bloeddruk"
    ],
    "sideEffects": ["Dehydratie", "Hoofdpijn", "Dorstgevoel"]
  },
  {
    "name": "Spirinolacton",
    "brandName": "Aldactone",
    "effects": [
      "Vermindert hoeveelheid circulerend volume",
      "Verlaagt bloeddruk"
    ],
    "sideEffects": ["Dehydratie", "Hoofdpijn", "Dorstgevoel"]
  },
  {
    "name": "Pantoprazol",
    "brandName": "Pantazol",
    "effects": ["Maagzuurremmer"],
    "sideEffects": ["Maag-darmklachten", "Hoofdpijn", "Misselijkheid"]
  },
  {
    "name": "Antagel",
    "brandName": null,
    "effects": ["Bindt maagzuur en neutraliseert daardoor de maaginhoud"],
    "sideEffects": ["Maag-darmklachten", "Niersteenvorming"]
  },
  {
    "name": "Movicolon",
    "brandName": "Macrogol",
    "effects": [
      "Laxerend. Houdt water in de darmen vast, waardoor ontlasting zachter wordt"
    ],
    "sideEffects": ["Opgeblazen gevoel", "Buikpijn"]
  },
  {
    "name": "Lactulose",
    "brandName": "Duphalac",
    "effects": ["Laxerend. Maakt ontlasting zachter"],
    "sideEffects": ["Winderigheid", "Diarree"]
  },
  {
    "name": "Loperamide",
    "brandName": "Immodium",
    "effects": ["Remming peristaltiek"],
    "sideEffects": ["Misselijkheid", "Buikpijn", "Duizeligheid"]
  },
  {
    "name": "Colex Klyx",
    "brandName": null,
    "effects": ["Laxerend"],
    "sideEffects": ["Buikpijn", "Kramp", "Branderig gevoel anus"]
  },
  {
    "name": "Metoclopramide",
    "brandName": "Primperan",
    "effects": [
      "Stimuleert bewegingen van de maag en eerste deel van de darmen"
    ],
    "sideEffects": ["Slaperigheid", "Diarree", "Gevoel van zwakte"]
  },
  {
    "name": "Bisacodyl",
    "brandName": "Dulcolax",
    "effects": ["Laxerend"],
    "sideEffects": ["Buikkramp"]
  },
  {
    "name": "Ranitidine",
    "brandName": "Zantac",
    "effects": ["Maagzuurremmer"],
    "sideEffects": ["Maag-darmklachten", "Duizelig"]
  },
  {
    "name": "Metformine",
    "brandName": "Glucophage",
    "effects": ["Verlaagt bloedglucose"],
    "sideEffects": [
      "Maag-darmklachten",
      "Verminderde eetlust",
      "Smaakstoornissen"
    ]
  },
  {
    "name": "Glicazide",
    "brandName": "Diamicron",
    "effects": ["Verlaagt bloedglucose"],
    "sideEffects": ["Gewichtstoename", "Hypoglykemie", "Wazig zien"]
  },
  {
    "name": "Novomix mengsel lang en snelwerkend",
    "brandName": null,
    "effects": ["Insuline - glucose uit voeding in lichaamscellen terecht komt"],
    "sideEffects": [
      "Hypoglykemie",
      "Overgevoeligheid",
      "Spuitplekken, hier niet prikken"
    ]
  },
  {
    "name": "Novorapid kortwerkend",
    "brandName": null,
    "effects": ["Insuline - glucose uit voeding in lichaamscellen terecht komt"],
    "sideEffects": [
      "Hypoglykemie",
      "Overgevoeligheid",
      "Spuitplekken, hier niet prikken"
    ]
  },
  {
    "name": "Lantus langwerkend",
    "brandName": null,
    "effects": ["Insuline - glucose uit voeding in lichaamscellen terecht komt"],
    "sideEffects": [
      "Hypoglykemie",
      "Overgevoeligheid",
      "Spuitplekken, hier niet prikken"
    ]
  },
  {
    "name": "Glucose 40%",
    "brandName": null,
    "effects": ["Verhoogt de bloedglucose"],
    "sideEffects": ["Hyperglykemie", "Hypoglykemie", "Leversteatose"]
  },
  {
    "name": "Levothyroxine",
    "brandName": "Thyrax",
    "effects": ["Hypothyroïdie"],
    "sideEffects": ["Diarree", "Nervositeit"]
  },
  {
    "name": "Amoxicilline / Clavulaanzuur",
    "brandName": "Augmentin",
    "effects": ["Penicilline - doodt bacterien"],
    "sideEffects": [
      "Maag-darm klachten",
      "Schimmel-of gistinfecties van de slijmvliezen"
    ]
  },
  {
    "name": "Amoxicilline",
    "brandName": "Clamoxyl",
    "effects": ["Penicilline → doodt bacteriën"],
    "sideEffects": ["Maag-darm klachten", "Huiduitslag", "Jeuk"]
  },
  {
    "name": "Ciprofloxaline",
    "brandName": "Ciproxin",
    "effects": ["Doodt bacteriën"],
    "sideEffects": ["Maag-darm klachten", "Hoofdpijn", "Allergische reactie"]
  },
  {
    "name": "Cefuroxim",
    "brandName": "Zinacef",
    "effects": ["Doodt bacteriën"],
    "sideEffects": [
      "Tromboflebitis",
      "Misselijkheid",
      "Verhoging / koorts",
      "Diarree"
    ]
  },
  {
    "name": "Ceftazidim",
    "brandName": "Fortum",
    "effects": ["Doodt bacteriën"],
    "sideEffects": ["Huiduitslag", "Jeuk", "Diarree", "Misselijkheid"]
  },
  {
    "name": "Floxapen",
    "brandName": "Flucioxacilline / Stafoxil",
    "effects": ["Smalspectrum penicilline, doodt bacteriën"],
    "sideEffects": ["Tromboflebitis", "Misselijkheid", "Braken"]
  },
  {
    "name": "Piperacilline / Tazobacte",
    "brandName": "Tazozin",
    "effects": ["Penicilline → doodt bacteriën"],
    "sideEffects": ["Maag-darmklachten", "Huiduitslag", "Koorts"]
  },
  {
    "name": "Meropenem",
    "brandName": "Meronem",
    "effects": ["Doodt bacteriën"],
    "sideEffects": ["Trombocytemie", "Maag-darmklachten", "Hoofdpijn"]
  },
  {
    "name": "Gentamycine",
    "brandName": null,
    "effects": ["Doodt bacteriën"],
    "sideEffects": [
      "Neurotoxiciteit",
      "Gevoelloosheid",
      "Spierkrampen",
      "Om de dag dalspiegel prikken i.v.m. invloed op nierfunctie"
    ]
  },
  {
    "name": "Metronidazol",
    "brandName": "Flagyl",
    "effects": ["Doodt bacteriën, schimmels en parasieten"],
    "sideEffects": ["Maag-darmklachten", "Metaalsmaak", "Zweertjes in de mond"]
  },
  {
    "name": "Vancomycine",
    "brandName": null,
    "effects": ["Doodt bacteriën"],
    "sideEffects": ["Schimmelinfectie", "Huiduitslag"]
  },
  {
    "name": "Nystatine",
    "brandName": null,
    "effects": ["Doodt gisten en schimmels"],
    "sideEffects": ["Maag-darmklachten"]
  },
  {
    "name": "Paracetamol",
    "brandName": "Perfalgan",
    "effects": ["Pijnstillend", "Koorts verlagend"],
    "sideEffects": [
      "Medicijnafhankelijke hoofdpijn",
      "Overgevoeligheid",
      "Leverbeschadiging"
    ]
  },
  {
    "name": "Diclofenac",
    "brandName": "Voltaren",
    "effects": ["Pijnstillend", "Koortsverlagend", "Ontstekingsremmend"],
    "sideEffects": [
      "Maag-darmklachten",
      "Beschadiging van maag/darm",
      "Hoofdpijn"
    ]
  },
  {
    "name": "Tramadol",
    "brandName": "Tramal",
    "effects": ["Pijnstillend"],
    "sideEffects": ["Sufheid", "Misselijkheid", "Obstipatie"]
  },
  {
    "name": "Oxycontin",
    "brandName": null,
    "effects": ["Sterk pijnstillend", "Gereguleerde afgifte", "Langwerkend"],
    "sideEffects": ["Obstipatie", "Sufheid", "Maag-darmklachten"]
  },
  {
    "name": "Oxycodon",
    "brandName": "Oxynorm",
    "effects": ["Sterkt pijnstillend", "Kortwerkend"],
    "sideEffects": ["Obstipatie", "Sufheid", "Maag-darmklachten"]
  },
  {
    "name": "Morfine",
    "brandName": null,
    "effects": ["Sterk pijnstillend", "Verminderd benauwdheid"],
    "sideEffects": ["Obstipatie", "Sufheid", "Maag-darmklachten"]
  },
  {
    "name": "Fentanyl / Abstral / Instanyl",
    "brandName": null,
    "effects": ["Sterk pijnstillend"],
    "sideEffects": ["Obstipatie", "Sufheid", "Maag-darmklachten"]
  },
  {
    "name": "Butylsco-polamine",
    "brandName": "Buscopan",
    "effects": ["Tegen darmspasmen", "Niersteen kolieken"],
    "sideEffects": [
      "Toename hartfrequentie",
      "Droge mond",
      "Verstopping",
      "Kortademig"
    ]
  },
  {
    "name": "Thiamine (Vitamine B1)",
    "brandName": null,
    "effects": ["Heeft invloed op centrale zenuwstelsel"],
    "sideEffects": ["Overgevoeligheid, opslag"]
  },
  {
    "name": "Alfacalcidol",
    "brandName": "Etalpa",
    "effects": [
      "Voorkomt broos worden van de botten",
      "Vitamine D. wordt onvoldoende aangemaakt bij nierinsufficiëntie"
    ],
    "sideEffects": ["Hypercalciemie", "Hyperfosfatemie"]
  },
  {
    "name": "Foliumzuur (Vitamine B11)",
    "brandName": null,
    "effects": ["Ter voorkoming van foliumzuur deficiëntie"],
    "sideEffects": ["Zelden"]
  },
  {
    "name": "Dianet",
    "brandName": null,
    "effects": [
      "Multivitaminen voor dialyse patiënten. Tijdens dialyse worden vitamines uitgespoeld"
    ],
    "sideEffects": ["Geen"]
  },
  {
    "name": "Hydroxoco-Balamine (Vitamine B12)",
    "brandName": null,
    "effects": [
      "Profylaxe behandeling en therapie van vitamine B12-deficientie bij anemie"
    ],
    "sideEffects": ["Allergische reactie, bijv. eczeem"]
  },
  {
    "name": "Azathioprine",
    "brandName": "Imuran",
    "effects": ["Anti-rheumatica, onderdrukt afweermechanisme van het lichaam"],
    "sideEffects": ["Misselijk", "Koorts", "Diarree"]
  },
  {
    "name": "Mycofenolzuur",
    "brandName": "Cellcept",
    "effects": [
      "Onderdrukt lichaamsvreemde cellen",
      "Remt ontstekingen",
      "Wordt gegeven bij transplantaties"
    ],
    "sideEffects": [
      "Diarree",
      "Braken",
      "Virale en bacteriële schimmelinfectie"
    ]
  },
  {
    "name": "Tacrolimus",
    "brandName": null,
    "effects": [
      "Onderdrukt lichaamsafweer tegen vreemde cellen",
      "Remt ontstekingen",
      "Wordt gegeven bij transplantaties"
    ],
    "sideEffects": ["Maagpijn", "Duizelig", "Hoofdpijn"]
  },
  {
    "name": "Prednisolon",
    "brandName": "Prednison",
    "effects": ["Remmen van ontstekingen en overgevoeligheidsreacties"],
    "sideEffects": ["Hoofdpijn", "Duizelig", "Vochtretentie"]
  },
  {
    "name": "Methyl-prednisolon",
    "brandName": null,
    "effects": [
      "Remmen van ontstekingen en overgevoeligheidsreacties",
      "Bij ernstige ontstekingen"
    ],
    "sideEffects": ["Duizeligheid", "Hoofdpijn", "Spierzwakte"]
  },
  {
    "name": "Albumine",
    "brandName": null,
    "effects": ["Eiwitgehalte in het bloed aanvullen"],
    "sideEffects": ["Hypertensie", "Zelden: Koorts, rillingen, braken"]
  },
  {
    "name": "Mesalazine",
    "brandName": "Pentasa",
    "effects": ["Remt ontstekingen in de darmwand"],
    "sideEffects": ["Maag-darmklachten", "Hoofdpijn", "Duizelig"]
  },
  {
    "name": "Infliximab",
    "brandName": "Remicade",
    "effects": ["Onderdrukt de lichaamsafweer en remt ontstekingen"],
    "sideEffects": [
      "Overgevoeligheidsreacties",
      "Dyspnoe",
      "Urticaria",
      "Hoofdpijn"
    ]
  },
  {
    "name": "Natrium-polystyreen-sulfonaat",
    "brandName": "Resonium",
    "effects": ["Verlagen van kaliumgehalte in het bloed"],
    "sideEffects": [
      "Irritatie van de maag",
      "Obstipatie",
      "Verminderde eetlust",
      "Hypernatriemie"
    ]
  },
  {
    "name": "Calci-Chew Calci-Chew D3",
    "brandName": null,
    "effects": ["Fosfaatbinder bij dialyse patiënten",
      "Calciumsuppletie",
      "Osteoporose"],
    "sideEffects": ["Misselijkheid", "Braken", "Hoofdpijn"]
  },
  {
    "name": "Sevelamer",
    "brandName": "Renagel",
    "effects": ["Fosfaatbinder"],
    "sideEffects": ["Misselijk", "Braken", "Hoofdpijn"]
  },
  {
    "name": "Aranesp",
    "brandName": "Darbepoetine",
    "effects": ["Verhelpt anemie als gevolg van chronische nierinsufficiëntie"],
    "sideEffects": [
      "Hypertensie",
      "Trombose van vasculaire toegangsplaats (fistel, shunt",
      "Hoofdpijn"
    ]
  },
  {
    "name": "Ferricarboxy-Maltose",
    "brandName": "Ferinject",
    "effects": ["Wordt gegeven bij (ferriprieve) anemie"],
    "sideEffects": [
      "Anafylactische reacties",
      "Hoofdpijn",
      "Allergische reacties"
    ]
  },
  {
    "name": "Kaliumchloride",
    "brandName": null,
    "effects": ["Behandeling van hypokaliemie"],
    "sideEffects": ["Tromboflebitis", "Hyperkaliemie"]
  },
  {
    "name": "Colchicine",
    "brandName": null,
    "effects": ["Behandeling van jicht"],
    "sideEffects": ["Maag-darmklachten", "Neuropathie", "Spierzwakte"]
  }
]

export default medicines;