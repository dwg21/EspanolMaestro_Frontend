import React, { useContext, useEffect, useState } from "react";

import VocabularyDrill from "./VocabularyDrill";
import AuthContext from "../../context/AuthProvider";

const VocabularyForm = () => {
  const { userData, getUserData } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      getUserData();
    }
  }, []);

  const [questionQuantity, setQuestionQuantity] = useState(10);
  const [verbs, setVerbs] = useState("1");
  const [vocabularyDrillActive, setVocabularyDrillActive] = useState(false);

  const handleChangeQuantity = (event) => {
    setQuestionQuantity(event.target.value);
  };

  const handleChangeWords = (event) => {
    setVerbs(event.target.value);
  };

  const handleStartExercise = () => {
    setVocabularyDrillActive(true);
  };

  if (vocabularyDrillActive) {
    return (
      <div>
        <VocabularyDrill
          questionQuantity={questionQuantity}
          verbs={verbs}
          setVocabularyDrillActive={setVocabularyDrillActive}
        />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex flex-col justify-center items-center p-1">
        <h2 className="text-2xl mb-4 heading p-2">Vocabulary Exercise</h2>
        <div className="bg-white p-6 rounded-lg max-w-[600px] border-2 border-slate-20 shadow-lg flex-row  ">
          <p className="text-xl mb-4 text-center">
            Welcome to the Vocabulary Exercise
          </p>
          <p className="mb-4">
            This is an exercise designed to help you practice and remember
            vocabulary. Select your preferred options and begin! Each word will
            cycle until you have got it right at least 2 times.
          </p>

          <div className="mb-4">
            <label
              htmlFor="questionQuantity"
              className="block mb-2 text-center italic"
            >
              How Many Different Words ?
            </label>
            <select
              id="questionQuantity"
              className="w-full px-4 py-2 border rounded"
              value={questionQuantity}
              onChange={handleChangeQuantity}
            >
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="verbSelction"
              className="block mb-2 text-center italic"
            >
              Which Words ?
            </label>
            <select
              id="verbSelction"
              className="w-full px-4 py-2 border rounded"
              value={verbs}
              onChange={handleChangeWords}
            >
              <option value={"1"}>Most Common Verbs</option>
              <option value={"2"}>Animals</option>
              <option value={"3"}>Body Parts</option>
              {Object.keys(userData).length !== 0 && (
                <option value={"4"}>Your Custom Words</option>
              )}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded text-center button"
              onClick={handleStartExercise}
            >
              Start Drill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyForm;
