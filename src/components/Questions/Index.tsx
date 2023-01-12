import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../../contest/AppContext';
import { AnsweredQuestion, UpdateAnswers } from '../../types/question.types';
import SingleQuestion from '../SingleQuestion/Index';
import './styles.css';

const Questions = ({ updateAnswers, answeredQuestion }: { updateAnswers: UpdateAnswers; answeredQuestion: any }) => {
  const questions = useContext(AppContext);
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState<AnsweredQuestion>({ questionid: 0, question: '', answers: [] });

  const onChangeHandler = (
    e: { target: { value: string } },
    option: { optionid: number; optionvalue: string },
    questionid: number,
    question: string
  ) => {
    let answeredQ;
    if (answer.questionid === questionid) {
      answeredQ = {
        questionid,
        question,
        answers: [...answer.answers, e.target.value]
      };
    }

    answeredQ = {
      questionid,
      question,
      answers: [e.target.value]
    };

    setAnswer(answeredQ);
  };

  const nextPageHandler = () => {
    if (answer && page < questions.length - 1) {
      if (answer.answers.length > 0) updateAnswers(answer);
      setPage(page + 1);
    }
  };

  const prevPageHandler = () => {
    if (answer && page > 0) {
      setPage(page - 1);
    }
  };

  const onSubmitHandler = () => {
    if (answeredQuestion.length === 0) {
      alert('No question answered. Please answer question to check result');
    } else navigate('/result');
  };

  return (
    <div className="w-75 p-3 questions-wrapper">
      <SingleQuestion question={questions[page] as any} onChangeHandler={onChangeHandler} />
      <div className="container d-flex align-items-center justify-content-between pt-3">
        <div id="prev">
          <button className={`btn btn-primary ${page === 0 ? 'disabled' : ''}`} onClick={prevPageHandler}>
            Previous
          </button>
        </div>
        {page === questions.length - 1 ? (
          <div className="ml-auto mr-sm-5">
            <button className="btn btn-danger" onClick={onSubmitHandler}>
              Submit
            </button>
          </div>
        ) : (
          <div className="ml-auto mr-sm-5">
            <button className="btn btn-danger" onClick={nextPageHandler}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
