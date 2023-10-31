import React, { useState } from "react";
import "../styles/addQue.scss";
import axios from "axios";
import { useCookies } from "react-cookie";

const AddQue = () => {
  const [cookies] = useCookies(["access_token"]);

  const [formData, setFormData] = useState({
    language: "",
    question: "",
    options: ["", "", "", ""],
    answer: "",
    difficulty: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...formData.options];
    newOptions[index] = e.target.value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleAddQuestion = async () => {
    await axios.post(
      "http://localhost:5000/api/question/createQuestion",
      {
        formData,
      },
      {
        headers: { authorization: cookies.access_token },
      }
    );

    setFormData({
      language: "",
      question: "",
      options: ["", "", "", ""],
      answer: "",
      difficulty: "",
    });
  };

  return (
    <section className="addQue_cls section_padding">
      <h2>Add Question</h2>
      <form>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Options</label>
          {formData.options.map((option, index) => (
            <input
              type="text"
              key={index}
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
              required
            />
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
      </form>
    </section>
  );
};

export default AddQue;