import React, { useState } from "react";
import { ConjugationForm } from "../components";

const Conjugation = () => {
  const [conjugationFormActive, setConjugationFormActive] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center p-3">
      {conjugationFormActive === false ? (
        <h2 className="text-2xl font-bold mb-4 heading">
          Conjugation Exercise
        </h2>
      ) : (
        <></>
      )}
      <ConjugationForm
        conjugationFormActive={conjugationFormActive}
        setConjugationFormActive={setConjugationFormActive}
      />
    </div>
  );
};

export default Conjugation;
