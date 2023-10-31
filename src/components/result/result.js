import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ChartComponent from "../progress/chartComponent";
import TestTable from "../progress/tables";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./result.scss";

const Result = () => {
  const [cookies] = useCookies(["access_token"]);
  const location = useLocation();
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { title } = location.state;

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/score/getScores/${title}`,
      {
        headers: { authorization: cookies.access_token },
      }
    );

    setAttempts(response?.data?.scores.length);

    const scoreData = response?.data?.scores?.map((res) => {
      return res.score.toFixed(2);
    });

    setScore(scoreData);
    setData(response.data.scores);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="result-heading">{title.toUpperCase()} REPORTS</h2>
      {isLoading ? (
        <div className="loader">
          <ClipLoader size={50} color={"black"} loading={isLoading} />
        </div>
      ) : (
        <>
          {score.length > 0 && (
            <ChartComponent scores={score} numberOfAttempts={attempts} />
          )}
          <div className="test-table">
            <TestTable testData={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
