import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExamResult from './components/exam-result/Index';
import Questions from './components/Questions/Index';
import './App.css';

function App() {
  const [answeredQuestion, setAnsweredQuestion] = useState<any[]>([]);

  const updateAnswers = (payload: any) => {
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
