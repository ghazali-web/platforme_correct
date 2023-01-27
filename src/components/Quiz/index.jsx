import React, { useState } from "react";
import { Chart } from "..";
import "./style.css";
export default function App() {
  const questions = [
    {
      questionText:
        "High entropy means that the partitions in classification are",
      answerOptions: [
        { answerText: "useful", isCorrect: false },
        { answerText: "pure", isCorrect: false },
        { answerText: "not pure", isCorrect: true },
        { answerText: "useless", isCorrect: false },
      ],
    },
    {
      questionText:
        " A machine learning problem involves four attributes plus a class. The attributes have 3, 2, 2, and 2 possible values each. The class has 3 possible values. How many maximum possible different examples are there?",
      answerOptions: [
        { answerText: "12", isCorrect: false },
        { answerText: "72", isCorrect: true },
        { answerText: "24", isCorrect: false },
        { answerText: "48", isCorrect: false },
      ],
    },
    {
      questionText: " Which of the following is NOT supervised learning?",
      answerOptions: [
        { answerText: "PCA", isCorrect: true },
        { answerText: "Decision Tree", isCorrect: false },
        { answerText: "Linear Regression", isCorrect: false },
        { answerText: "Naive Bayesian", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following statements about Naive Bayes is incorrect?",
      answerOptions: [
        { answerText: "Attributes are equally important.", isCorrect: false },
        {
          answerText:
            "Attributes are statistically independent of one another given the class value.",
          isCorrect: false,
        },
        {
          answerText: "Attributes can be nominal or numeric",
          isCorrect: false,
        },
        {
          answerText:
            "Attributes are statistically dependent of one another given the class value.",
          isCorrect: true,
        },
      ],
    },

    {
      questionText:
        "Suppose we would like to perform clustering on spatial data such as the geometrical locations of houses. We wish to produce clusters of many different sizes and shapes. Which of the following methods is the most appropriate?",
      answerOptions: [
        { answerText: "Decision Tree", isCorrect: false },
        { answerText: "K-means clustering", isCorrect: false },
        {
          answerText: "Model-based clustering ",
          isCorrect: false,
        },
        { answerText: "Density-based clustering ", isCorrect: true },
      ],
    },

    {
      questionText:
        "Which of the following are the spatial clustering algorithms?",
      answerOptions: [
        { answerText: " Partitioning based clustering", isCorrect: false },
        { answerText: "K-means clustering", isCorrect: false },
        {
          answerText: "Grid based clustering ",
          isCorrect: false,
        },
        { answerText: "All of the above ", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following tasks can be best solved using Clustering.",
      answerOptions: [
        {
          answerText: "Predicting the amount of rainfall based on various cues",
          isCorrect: false,
        },
        { answerText: " Training a robot to solve a maze", isCorrect: false },
        {
          answerText: "All of the above ",
          isCorrect: false,
        },
        {
          answerText: "Detecting fraudulent credit card transactions ",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Choose the correct option(s) from the following.",
      answerOptions: [
        {
          answerText:
            "When working with a small dataset, one should prefer low bias/high variance classifiers over high bias/low variance classifiers.",
          isCorrect: false,
        },
        {
          answerText:
            "When working with a small dataset, one should prefer high bias/low variance classifiers over low bias/high variance classifiers.",
          isCorrect: false,
        },
        {
          answerText:
            " When working with a large dataset, one should prefer high bias/low variance classifiers over low bias/high variance classifiers. ",
          isCorrect: false,
        },
        {
          answerText:
            "When working with a small dataset, one should prefer high bias/low variance classifiers over low bias/high variance classifiers.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Which of the following best describes the joint probability distribution P(X, Y, Z) for the given Bayes net.",
      answerOptions: [
        { answerText: "P(X, Y, Z) = P(X) * P(Y|X) * P(Z|Y)", isCorrect: false },
        { answerText: "P(X, Y, Z) = P(Z) * P(X|Z) * P(Y|Z)", isCorrect: false },
        {
          answerText: " P(X, Y, Z) = P(X) * P(Y) * P(Z) ",
          isCorrect: false,
        },
        { answerText: "P(X, Y, Z) = P(Y) * P(X|Y) * P(Z|Y)", isCorrect: true },
      ],
    },
    {
      questionText:
        "Compared to the variance of the Maximum Likelihood Estimate (MLE), the variance of the Maximum A Posteriori (MAP) estimate is ________",
      answerOptions: [
        { answerText: "higher", isCorrect: false },
        { answerText: "same", isCorrect: false },
        {
          answerText: "it could be any of the above ",
          isCorrect: false,
        },
        { answerText: "Denlower", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  var missed = 10 - score;
  const data = {
    labels: ["score", "missed"],
    datasets: [
      {
        label: "# of Votes",
        data: { score, missed },
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <div className="fixedHeightPaper">
            <Chart data={data} />
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
