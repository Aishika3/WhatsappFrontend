import React, { useState } from 'react';
import './styles.css'

export const QuestionForm = ({ handleAddNode, parentId, handleQuestionForm }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]); // New state for URLs

  const addQuestion = () => {
    setQuestions([...questions, '']);
    setAnswers([...answers, '']);
    setFiles([...files, null]);
    setUrls([...urls, '']); // Initialize with an empty string
  }

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  }

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  // New handler for URL changes
  const handleUrlChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming each question is a parent node and each answer is an option
    questions.forEach((question, index) => {
      handleAddNode(parentId, question, answers[index], files[index], urls[index]); // Pass the URL to the handleAddNode function
    });

    handleQuestionForm();
  }

  return (
    <form onSubmit={handleSubmit} className="question-form">
      {questions.map((question, index) => (
        <div className='question-item' key={index}>
          <label htmlFor={`question${index}`}>Question {index + 1}</label>
          <input
            type="text"
            id={`question${index}`}
            value={question}
            className="question-input"
            onChange={(event) => handleQuestionChange(index, event.target.value)}
          />
          <label htmlFor={`answer${index}`}>Answer {index + 1}</label>
          <input
            type="text"
            id={`answer${index}`}
            className="question-input"
            value={answers[index]}
            onChange={(event) => handleAnswerChange(index, event.target.value)}
          />
          <label htmlFor={`file${index}`}>File {index + 1}</label>
          <input
            type="file"
            id={`file${index}`}
            className="file-input"
            onChange={(event) => handleFileChange(index, event.target.files[0])}
          />
          <label htmlFor={`url${index}`}>URL {index + 1}</label>  {/* New input field for the URL */}
          <input
            type="text"
            id={`url${index}`}
            className="url-input"
            value={urls[index]}
            onChange={(event) => handleUrlChange(index, event.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addQuestion} className="add-question-button">Add Question</button>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default QuestionForm;
