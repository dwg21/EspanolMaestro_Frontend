import { useState, useContext } from "react";
import "./vocabularyDrill.css";
import AuthContext from "../../context/AuthProvider";

import {
  fight,
  watch,
  speak,
  have,
  neck,
  arm,
  head,
  shoulder,
  dog,
  cat,
  lion,
  bird,
  smoke,
  read,
  write,
  learn,
  sleep,
  cook,
  knee,
  eye,
  finger,
  hand,
  ear,
  nose,
  horse,
  pig,
  tiger,
  elephant,
  whale,
  rat,
} from "../resources/index";

import ProgressBar from "../ProgressBar/ProgressBar";

// import ServerApi from "../../serverApi/axios";
const UserDataUrl = "/api/v1/userdata";

// question count, image, spanish, english

let verbsData = {
  fight: [0, "To Fight", fight, "Luchar", "fight"],
  speak: [0, "To Speak", speak, "Hablar", "speak"],
  watch: [0, "To Watch", watch, "Mirar", "watch"],
  have: [0, "To Have", have, "Tener", "have"],

  smoke: [0, "To Smoke", smoke, "Fumar", "smoke"],
  read: [0, "To Read", read, "Leer", "read"],
  write: [0, "To Write", write, "Escribir", "write"],
  learn: [0, "To Learn ", learn, "Aprender", "learn"],
  sleep: [0, "To Sleep", sleep, "Dormir", "sleep"],
  cook: [0, "To Cook", cook, "Cocinar", "cook"],
};

let bodyPartWords = {
  Neck: [0, "Neck", neck, "Cuello", "Neck"],
  Arm: [0, "Arm", arm, "Brazo", "Arm"],
  Head: [0, "Head", head, "Cabeza", "Head"],
  Shoulder: [0, "Shoulder", shoulder, "Hombro", "Shoulder"],

  Knee: [0, "Knee", knee, "Rodilla", "Knee"],
  Eye: [0, "eye", eye, "Ojo", "Eye"],
  Finger: [0, "Finger", finger, "Dedo", "Finger"],
  Hand: [0, "hand", hand, "Lano", "Hand"],
  nose: [0, "nose", nose, "Nariz", "nose"],
  ear: [0, "ear", ear, "Oreja", "ear"],
};

let animalWords = {
  Dog: [0, "Dog", dog, "perro", "Dog"],
  Cat: [0, "Cat", cat, "Gato", "Cat"],
  Lion: [0, "Lion", lion, "Leon", "Lion"],
  Bird: [0, "Bird", bird, "Pajaro", "Bird"],

  Whale: [0, "Whale", whale, "Ballena", "Whale"],
  Tiger: [0, "Tiger", tiger, "Tigre", "Tiger"],
  Elephant: [0, "Elephant", elephant, "Elefante", "Elephant"],
  Pig: [0, "Pig", pig, "Cerdo", "Pig"],
  Horse: [0, "Horse", horse, "Caballo", "Horse"],
  Rat: [0, "Rat", rat, "Raton", "Rat"],
};

// The drill will run until the user has got each word right 2 times.

// 1 => Most common verbs
// 2 -> animlal words
// 3 => body parts

const VocabularyDrill = ({
  questionQuantity,
  verbs,
  setVocabularyDrillActive,
}) => {
  const { userData } = useContext(AuthContext);
  console.log(userData);

  let verbsToBeSubmited = [];
  let verbData = {};
  if (verbs === "1") {
    verbData = Object.fromEntries(
      Object.entries(verbsData).slice(0, questionQuantity)
    );
  } else if (verbs === "2") {
    verbData = Object.fromEntries(
      Object.entries(animalWords).slice(0, questionQuantity)
    );
  } else if (verbs === "3") {
    verbData = Object.fromEntries(
      Object.entries(bodyPartWords).slice(0, questionQuantity)
    );
  } else if (verbs === "4") {
    const formattedCustomVocabulary = userData.newWords.map((item, index) => {
      const [spanish, english] = item.split(": ");
      return [index, english, "", spanish, english];
    });

    verbData = Object.fromEntries(
      formattedCustomVocabulary.map(([index, english, , spanish]) => [
        english,
        [index, english, "", spanish, english],
      ])
    );
    console.log(verbData);
  }

  const [drillActive, setDrillActive] = useState(true);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [correctAnswer, SetCorrectAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  const [verb, setVerb] = useState(Object.values(verbData)[0]);

  // Tracks progress of questions answered
  const [progress, SetProgress] = useState(0);

  const handleReset = () => {
    SetVocabularyDrillActive(false);
  };

  // Selects a verb from the list but only returns if it has an index less than 2
  // and is diffeent to the last verb.
  const SelectVerb = () => {
    while (true) {
      const index = Math.floor(Math.random() * questionQuantity);

      // Check if the index is within a valid range
      if (index >= 0 && index < Object.values(verbData).length) {
        const selectedVerb = Object.values(verbData)[index];
        if (selectedVerb[0] < 2) {
          console.log(selectedVerb);
          return selectedVerb;
        }
      }
    }
  };

  //check if the game should still be active or if the user
  // has answerd eveyrthing sifficently.
  // Returns true if everythig answered correcty twice or false otherwise

  // Sumbits the correct vocbaculry to the dataase
  /// Object.values(verbData) = list to add

  const submitVocabData = async (VocabList) => {
    let verbsToBeSubmited = [];
    const FormatedVerbs = Object.values(VocabList);
    for (let i = 0; i < FormatedVerbs.length; i++) {
      verbsToBeSubmited.push(FormatedVerbs[i][3]);
    }
    const newVocabualry = { newVocabualry: verbsToBeSubmited };
    console.log(newVocabualry);
    try {
      const { data } = await ServerApi.post(UserDataUrl, newVocabualry, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const correctAnswerResponse = () => {
    console.log("verbData:", verbData);
    console.log("verb:", verb);
    SetProgress(progress + (1 / (questionQuantity * 2)) * 100);
    verbData[verb[4]][0] += 1;
    console.log(verbsToBeSubmited);
    // Displays Correct answer message
    SetCorrectAnswer(true);
    setTimeout(() => {
      SetCorrectAnswer(false);
      setAnswer("");
      setVerb(SelectVerb);
    }, 1500);
  };

  const incorrectAnswerResponse = () => {
    setRevealAnswer(true);
    setTimeout(() => {
      setVerb(SelectVerb);
      setRevealAnswer(false);
      setAnswer("");
    }, 2000);
  };

  //handles answer

  const handleSubmit = () => {
    if (progress > 100 - 100 / questionQuantity) {
      submitVocabData(verbData);
      setDrillActive(false);
      return;
    }
    // Convert both answers to lowercase for case-insensitive comparison
    const userAnswerLower = answer.toLowerCase();
    const correctAnswerLower = verb[3].toLowerCase();

    if (userAnswerLower === correctAnswerLower) {
      correctAnswerResponse();
    } else {
      incorrectAnswerResponse();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="p-1 flex justify-center h-[95vh] items-center">
      <div className="p-3 bg-white w-full max-w-[600px]">
        {drillActive === true ? (
          <div className="flex flex-col items-center space-y-2 border-2 shadow-lg rounded-md px-4 py-8 ">
            <span className="verb">{`${verb[1]}`}</span>
            <div className="space-y-3">
              <ProgressBar value={progress} />
              <img
                className={`gif h-[300px] w-[300px] md:h-[400px] md:w-[400px] ${
                  verbs === "4" && `hidden`
                }`}
                src={verb[2]}
                alt={verb[1]}
              />
            </div>
            <input
              value={answer}
              onInput={(e) => setAnswer(e.target.value)}
              className="border border-gray-400 p-2 rounded"
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-blue-500 button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {revealAnswer === true ? (
              <span className="incorrectAnswer">
                The correct answer is {verb[3]}
              </span>
            ) : correctAnswer == true ? (
              <span className="correctAnswer text-center">
                Correct Answer !
              </span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="p-0">
            <div className="flex flex-col justify-center items-center space-y-3">
              <span className="heading text-center">
                Well Done! You've Finished
              </span>
              <button
                onClick={() => setVocabularyDrillActive(false)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8  rounded max-w-[300px] button"
              >
                Go again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyDrill;
