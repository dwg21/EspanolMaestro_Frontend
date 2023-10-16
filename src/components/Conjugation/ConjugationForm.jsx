import React, { useState } from "react";

import ConjugationDrill from "./ConjugationDrill";

const ConjugationForm = ({
  conjugationFormActive,
  setConjugationFormActive,
}) => {
  const [questionQuantity, SetQuestionQuantity] = useState(10);
  const [verbs, SetVerbs] = useState(1);
  const [tense, setTense] = useState(1);

  const handleChangeQuantity = (event) => {
    SetQuestionQuantity(event.target.value);
  };

  const handleChangeVerbs = (event) => {
    SetVerbs(event.target.value);
  };

  const handleChangeTense = (event) => {
    setTense(event.target.value);
  };

  const handleButtonClick = () => {
    setConjugationFormActive(true);
  };

  return (
    <div className="p-2">
      {!conjugationFormActive ? (
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-md p-6 border rounded shadow-lg text-center">
            <h5 className="text-2xl pb-6">
              Welcome to the Conjugation Exercise
            </h5>
            <p className="pb-6">
              This is an exercise designed to help you practice the conjugations
              of verbs in different tenses and situations. Please select your
              preferences.
            </p>

            <div className="w-full mb-6">
              <label
                htmlFor="questionQuantity"
                className="block mb-2 font-medium text-gray-700"
              >
                How Many Questions?
              </label>
              <select
                id="questionQuantity"
                className="w-full p-2 border rounded"
                value={questionQuantity}
                onChange={handleChangeQuantity}
              >
                <option value={3}>three</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </select>
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="verbSelection"
                className="block mb-2 font-medium text-gray-700"
              >
                Which Verbs?
              </label>
              <select
                id="verbSelection"
                className="w-full p-2 border rounded"
                value={verbs}
                onChange={handleChangeVerbs}
              >
                <option value={1}>Most Common</option>
                <option value={2}>Irregular</option>
              </select>
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="tenseSelection"
                className="block mb-2 font-medium text-gray-700"
              >
                Which Tense?
              </label>
              <select
                id="tenseSelection"
                className="w-full p-2 border rounded"
                value={tense}
                onChange={handleChangeTense}
              >
                <option value={1}>All</option>
                <option value={2}>Present</option>
                <option value={3}>Imperfect</option>
                <option value={4}>Indefinido</option>
              </select>
            </div>

            <button className="button" onClick={handleButtonClick}>
              Start Drill
            </button>
          </div>
        </div>
      ) : (
        <ConjugationDrill
          questionQuantity={questionQuantity}
          tense={tense}
          verbs={verbs}
          setConjugationFormActive={setConjugationFormActive}
        />
      )}
    </div>
  );
};

export default ConjugationForm;
