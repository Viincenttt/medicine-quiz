export type MedicineModel = {
    name: string,
    brandName: string | null,
    effects: string[],
    sideEffects: string[]
}

export type QuestionModel = {
    text: string,
    correctAnswers: string[],
    questionAnswers: string[],
    isMultipleChoice: boolean
}

export type GenerateQuestionOptions = {
    text: string,
    correctAnswers: string[],
    listOfPossibleAnswers: string[],
    totalNumberOfAnswers: number,
    isMultipleChoice: boolean
}