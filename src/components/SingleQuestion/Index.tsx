import React from 'react';
import { Question } from '../../types/question.types';
import './styles.css';

const SingleQuestion = ({
  question,
  onChangeHandler
}: {
  question: Question;
  onChangeHandler: (
    e: { target: { value: string } },
    option: { optionid: number; optionvalue: string },
    questionid: number,
    question: string,
  ) => void;
}) => {
  return (
    <div className="container mt-sm-5 mx-auto">
      <div className="question pt-2 flex-column justify-content-center align-items-center">
        <div className="py-2 h5 text-start">Q. {question.question}?</div>
        <div className="ml-3 pl-md-3 pt-sm-0 pt-3 d-flex flex-column justify-content-left text-left" id="options">
          <hr className="" />
          {question.questionoption.map((option: { optionid: number; optionvalue: string }) => (
            <div key={`option${option.optionid}`}>
              <label className="options ps-4 d-flex align-items-center">
                <input
                  type={question.questiontype}
                  name={`option${option.optionid}`}
                  id={`option${option.optionid}`}
                  className="mr-2"
                  onChange={(e) => onChangeHandler(e, option, question.questionid, question.question)}
                />
                <p className="text-start mb-0 ms-2">{option.optionvalue}</p>
              </label>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
