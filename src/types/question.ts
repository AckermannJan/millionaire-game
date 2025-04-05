export interface Option {
  option: string
  isCorrect: boolean
}

export interface AudiencePoll {
  option: string
  percentage: number
}

export enum JokersEnum {
  fiftyFifty = 'fiftyFifty',
  phoneAFriend = 'phoneAFriend',
  askTheAudience = 'askTheAudience',
}

export interface SelectedAnswer {
  answer: number | null
  isCorrect: boolean | null
}

export interface Jokers {
  [JokersEnum.fiftyFifty]: {
    optionsToRemove: number[]
  }
  [JokersEnum.phoneAFriend]: {
    friendAnswer: string
  }
  [JokersEnum.askTheAudience]: {
    audiencePoll: AudiencePoll[]
  }
}

export interface Question {
  question: string
  options: Option[]
  jokers: Jokers
}
