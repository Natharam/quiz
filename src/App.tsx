import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExamResult from './components/exam-result/Index';
import Questions from './components/Questions/Index';
import { AnsweredQuestion } from './types/question.types';
import './App.css';

function App() {
  const [answeredQuestion, setAnsweredQuestion] = useState<AnsweredQuestion[]>([]);

  const updateAnswers = (payload: AnsweredQuestion) => {
    const index = answeredQuestion?.findIndex((a) => a.questionid === payload.questionid);

    if (index === -1) {
      setAnsweredQuestion([...answeredQuestion, payload]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Questions updateAnswers={updateAnswers} answeredQuestion={answeredQuestion} />} />
          <Route
            path="/result"
            element={<ExamResult answeredQuestion={answeredQuestion} setAnsweredQuestion={setAnsweredQuestion} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
