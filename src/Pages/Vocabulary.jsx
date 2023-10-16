import React from "react";
import { useState } from "react";

//import vocbulary components
import { VocabularyDrill, VocabularyForm } from "../components/index";

const Vocabulary = () => {
  const [vocabularyDrillActive, SetVocabularyDrillActive] = useState(false);

  return (
    <div>
      {vocabularyDrillActive ? (
        <VocabularyDrill
          vocabularyDrillActive={vocabularyDrillActive}
          SetVocabularyDrillActive={SetVocabularyDrillActive}
        />
      ) : (
        <>
          <VocabularyForm />
        </>
      )}
    </div>
  );
};

export default Vocabulary;
