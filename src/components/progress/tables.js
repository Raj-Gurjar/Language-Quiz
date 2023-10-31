import React from "react";

const TestTable = ({ testData }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      timeZone: "Asia/Kolkata",
      hour12: true,
    };

    const istTime = date.toLocaleString("en-IN", options);

    return istTime;
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Language</th>
            <th>Score</th>
            <th>Test Time</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test, index) => (
            <tr key={index}>
              <td>{test.language}</td>
              <td>{test.score}</td>
              <td>{formatTime(test.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
