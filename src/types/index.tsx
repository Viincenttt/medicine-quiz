export type QuestionModel = {
    name: string,
    brandName: string | null,
    effects: string[],
    sideEffects: string[]
}

export type GenerateQuestionOptions = {
    text: string,
    correctAnswers: string[],
    listOfPossibleAnswers: string[],
    totalNumberOfAnswers: number,
    isMultipleChoice: boolean
}