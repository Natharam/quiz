import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnsweredQuestion } from '../../types/question.types';

const ExamResult = ({
  answeredQuestion,
  setAnsweredQuestion
}: {
  answeredQuestion: AnsweredQuestion[];
  setAnsweredQuestion: (answeredQuestion: AnsweredQuestion[]) => void;
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    setAnsweredQuestion([]);
    navigate('/');
  };

  return (
    <div className="container">
      <h3 className="fw-bolder mb-3">Result</h3>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {answeredQuestion?.length > 0
          ? answeredQuestion.map((question) => (
              <div className="p-3 w-100" key={question.questionid}>
                <h3 className="text-start">
                  <span>{question.questionid}</span> {question.question}
                </h3>
                <div className="text-start ps-4">
                  {question.answers.map((ans) => (
                    <div>{ans}</div>
                  ))}
                </div>
              </div>
            ))
          : <div className='mb-3 py-3'>No question answered.</div>}
      </div>

      <div>
        <button onClick={goBack} className="btn-outline-info border rounded">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ExamResult;
