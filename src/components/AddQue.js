import React, { useState } from "react";
import "../styles/addQue.scss";
import axios from "axios";
import { useCookies } from "react-cookie";

const AddQue = () => {
  const [cookies] = useCookies(["access_token"]);

  const [formData, setFormData] = useState({
    language: "Spanish",
    question: "",
    options: ["", "", "", ""],
    answer: "",
    difficulty: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Added success message state

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
    if (
      formData.language === "" ||
      formData.question === "" ||
      formData.options.some((option) => option === "") ||
      formData.answer === "" ||
      formData.difficulty === ""
    ) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    try {
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
        language: "spanish",
        question: "",
        options: ["", "", "", ""],
        answer: "",
        difficulty: "",
      });

      setSuccessMessage("Question submitted successfully"); // Set success message
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error adding the question. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <section className="addQue_cls section_padding">
      <h2>Add Question</h2>

      <form>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            required
          >
            <option value="spanish">spanish</option>
            <option value="german">german</option>
            <option value="chinese">chinese</option>
            <option value="japanese">japanese</option>
          </select>
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
        {errorMessage && <div className="error-popup">{errorMessage}</div>}
        {successMessage && <div className="success-popup">{successMessage}</div>}
      </form>
    </section>
  );
};

export default AddQue;