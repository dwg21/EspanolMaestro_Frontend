import React, { useState } from "react";

import { story1, story2, story3 } from "./stories";

const ReaderForm = ({ setReaderActive, setReaderData }) => {
  const [selectedStory, setSelectedStory] = useState(1);
  const [customText, setCustomText] = useState(""); //  state for custom text

  const handleChangeStory = (e) => {
    setSelectedStory(e.target.value);
    console.log(selectedStory);
  };

  const handleSumbit = () => {
    if (selectedStory == 1) {
      setReaderData(story1);
      setReaderActive(true);
    } else if (selectedStory == 2) {
      setReaderData(story2);
      setReaderActive(true);
    } else if (selectedStory == 3) {
      console.log("jj");
      setReaderData(story3);
      setReaderActive(true);
    } else if (selectedStory == 4) {
      setReaderData(customText);
      setReaderActive(true);
    }
  };

  const handleChange = (e) => {
    setCustomText(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-[600px] border-2 border-slate-20 shadow-lg flex-row  ">
      <p className="text-xl mb-4 text-center">Welcome to the Reading Tool</p>
      <p className="mb-4">
        This is an exercise designed to help you read in Spanish and learn new
        voculaburly as you go along.
      </p>

      <div className="mb-4">
        <label
          htmlFor="questionQuantity"
          className="block mb-2 text-center italic"
        >
          Select a story to read ?
        </label>
        <select
          id="questionQuantity"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChangeStory}
        >
          <option value={1}>Story 1</option>
          <option value={2}>Story 2</option>
          <option value={3}>Story 3</option>
          <option value={4}>Enter custom text</option>
        </select>
      </div>

      <div className={selectedStory == 4 ? "" : "hidden"}>
        <textarea
          placeholder="Enter your text here"
          className="w-full h-64 resize-none border border-gray-300 p-2"
          value={customText}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSumbit}
          className="bg-blue-500 text-white py-2 px-4 rounded text-center button"
        >
          Enter Reader
        </button>
      </div>
    </div>
  );
};

export default ReaderForm;
