export type AnsweredQuestion = {
  questionid: number;
  question: string;
  answers: string[];
};

export type Question = {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: {
    optionid: number;
    optionvalue: string;
    price: number;
    optionaction: string;
    selected: boolean;
    subquestion: never[];
  }[];
};

export type SingleQuestion = {
  question: Question;
};

export type Questions = Question[];

export type UpdateAnswers = (payload: AnsweredQuestion) => void;
