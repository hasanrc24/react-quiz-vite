import React, { useState } from "react";

const SingleData = ({data}) => {
  // console.log(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  const handleAnswer = (e) => {
    setAnswer(e.target.innerText);
    setCurrentQuestion(currentQuestion+1);
  }
  console.log(answer);
  return (
    <div className="flex gap-4">
      <div className="flex items-center">{data[currentQuestion]?.question}</div>
      <div className="">{data[currentQuestion]?.options?.map((option,i) => {
        return <button className="block" key={i} onClick={handleAnswer}>{option}</button>
      })}</div>
    </div>
  );
};

export default SingleData;
