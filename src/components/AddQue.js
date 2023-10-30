import React, { useState } from 'react';
import "../styles/addQue.scss";

const AddQue = () => {
    const [formData, setFormData] = useState({
        language: '',
        question: '',
        options: ['', '', '', ''], // An array to hold the options
        answer: '',
        difficulty: '',
    });

    const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOptionChange = (e, index) => {
        const newOptions = [...formData.options];
        newOptions[index] = e.target.value;
        setFormData({ ...formData, options: newOptions });
    };

    const handleAddQuestion = () => {
        // Here, you can handle adding the question data to your dataset or state.
        console.log(formData); // For demonstration purposes, we're logging the data.

        // Clear the form fields
        setFormData({
            language: '',
            question: '',
            options: ['', '', '', ''],
            answer: '',
            difficulty: '',
        });

        // Set the submission status to true
        setIsQuestionSubmitted(true);

        // Reset the submission status after a few seconds (optional)
        setTimeout(() => {
            setIsQuestionSubmitted(false);
        }, 3000); // Reset after 3 seconds
    };

    return (
        <section className='addQue_cls section_padding'>
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
                {isQuestionSubmitted && (
                    <div className="submission-message">
                        Question submitted successfully!
                    </div>
                )}
            </form>
        </section>
    );
};

export default AddQue;
