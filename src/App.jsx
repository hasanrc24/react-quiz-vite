import React from 'react';
import SingleData from './components/singleData';

function App() {

  const data = [
    {
      id: "1",
      question: "What is the capital of France",
      options: ["Paris", "New York", "Liverpool", "Dhaka"],
      answer: "Paris",
    },
    {
      id: "2",
      question: "What is the capital of Bangladesh",
      options: ["Paris", "Mirpur", "Liverpool", "Dhaka"],
      answer: "Dhaka",
    },
    {
      id: "3",
      question: "What is the capital of India",
      options: ["Delhi", "New York", "Mumbai", "Dhaka"],
      answer: "Paris",
    },
    {
      id: "4",
      question: "What is the capital of England",
      options: ["Gulistan", "New York", "Liverpool", "London"],
      answer: "London",
    },
    {
      id: "5",
      question: "What is the capital of USA",
      options: ["Paris", "Washington", "Liverpool", "Dhaka"],
      answer: "Washington",
    },
  ];

  return (
    <div className='bg-blue-300 h-screen w-screen flex justify-center items-center'>
      <div className="bg-customBlack p-4 rounded-xl text-white shadow-2xl">
        <SingleData data={data} />
      </div>
    </div>
  )
}

export default App
