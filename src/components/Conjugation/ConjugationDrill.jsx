import { useState, useEffect } from "react";
import { Typography, Box, Card, Stack } from "@mui/material";
import { ProgressBar } from "../index";
//import "./conjugationDrill.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import Table from "./Table";

//import ServerApi from "../../serverApi/axios";
const UserDataUrl = "/api/v1/userdata";

const irregularVerbs = {
  tener: {
    present: ["tengo", "tienes", "tiene", "tenemos", "tienen"],
    imperfect: ["tenia", "tenias", "tenia", "teniamos", "tenian"],
    indefindo: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvieron"],
  },
  ser: {
    present: ["soy", "eres", "es", "somos", "son"],
    imperfect: ["era", "eras", "era", "eramos", "eran"],
    indefindo: ["fui", "fuiste", "fue", "fuimos", "fueron"],
  },

  estar: {
    present: ["estoy", "estas", "esta", "estamos", "estan"],
    imperfect: ["estaba", "estabas", "estaba", "estabamos", "estaban"],
    indefindo: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvieron"],
  },
};

const commonVerbs = {
  vivir: {
    present: ["vivo", "vives", "vive", "vivimos", "viven"],
    imperfect: ["vivia", "vivias", "vivia", "viviamos", "vivian"],
    indefindo: ["vivi", "viviste", "vivio", "vivimos", "vivieron"],
  },
  hablar: {
    present: ["hablo", "hablas", "habla", "hablamos", "hablan"],
    imperfect: ["hablaba", "hablabas", "hablaba", "hablabamos", "hablaban"],
    indefindo: ["hable", "hablaste", "hablo", "hablamos", "hablaron"],
  },
  escribir: {
    present: ["escribo", "escribes", "escribe", "escribimos", "escriben"],
    imperfect: [
      "escribia",
      "escribias",
      "escribia",
      "escribiamos",
      "escribian",
    ],
    indefindo: [
      "escribi",
      "escribiste",
      "escribio",
      "escribimos",
      "escribieron",
    ],
  },
  correr: {
    present: ["corro", "corres", "corre", "corremos", "corren"],
    imperfect: ["corria", "corrias", "corria", "corriamos", "corrian"],
    indefindo: ["corri", "corriste", "corrio", "corrimos", "corrieron"],
  },
  comer: {
    present: ["como", "comes", "come", "comemos", "comen"],
    imperfect: ["comia", "comias", "comia", "comiamos", "comian"],
    indefindo: ["comi", "comiste", "comio", "comimos", "comieron"],
  },
  beber: {
    present: ["bebo", "bebes", "bebe", "bebemos", "beben"],
    imperfect: ["bebia", "bebias", "bebia", "bebiamos", "bebian"],
    indefindo: ["bebi", "bebiste", "bebio", "bebimos", "bebieron"],
  },
  dormir: {
    present: ["duermo", "duermes", "duerme", "dormimos", "duermen"],
    imperfect: ["dormia", "dormias", "dormia", "dormiamos", "dormian"],
    indefindo: ["dormi", "dormiste", "durmo", "dormimos", "durmieron"],
  },
  aprender: {
    present: ["aprendo", "aprendes", "aprende", "aprendemos", "aprenden"],
    imperfect: [
      "aprendia",
      "aprendias",
      "aprendia",
      "aprendiamos",
      "aprendian",
    ],
    indefindo: [
      "aprendi",
      "aprendiste",
      "aprendio",
      "aprendimos",
      "aprendieron",
    ],
  },
  jugar: {
    present: ["juego", "juegas", "juega", "jugamos", "juegan"],
    imperfect: ["jugaba", "jugabas", "jugaba", "jugabamos", "jugaban"],
    indefindo: ["jugue", "jugaste", "jugo", "jugamos", "jugaron"],
  },
  bailar: {
    present: ["bailo", "bailas", "baila", "bailamos", "bailan"],
    imperfect: ["bailaba", "bailabas", "bailaba", "bailabamos", "bailaban"],
    indefindo: ["baile", "bailaste", "bailo", "bailamos", "bailaron"],
  },
  cantar: {
    present: ["canto", "cantas", "canta", "cantamos", "cantan"],
    imperfect: ["cantaba", "cantabas", "cantaba", "cantabamos", "cantaban"],
    indefindo: ["cante", "cantaste", "canto", "cantamos", "cantaron"],
  },
  trabajar: {
    present: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajan"],
    imperfect: [
      "trabajaba",
      "trabajabas",
      "trabajaba",
      "trabajabamos",
      "trabajaban",
    ],
    indefindo: ["trabaje", "trabajaste", "trabajo", "trabajamos", "trabajaron"],
  },
  estudiar: {
    present: ["estudio", "estudias", "estudia", "estudiamos", "estudian"],
    imperfect: [
      "estudiaba",
      "estudiabas",
      "estudiaba",
      "estudiabamos",
      "estudiaban",
    ],
    indefindo: ["estudie", "estudiaste", "estudio", "estudiamos", "estudiaron"],
  },
  viajar: {
    present: ["viajo", "viajas", "viaja", "viajamos", "viajan"],
    imperfect: ["viajaba", "viajabas", "viajaba", "viajabamos", "viajaban"],
    indefindo: ["viaje", "viajaste", "viajo", "viajamos", "viajaron"],
  },
  leer: {
    present: ["leo", "lees", "lee", "leemos", "leen"],
    imperfect: ["leia", "leias", "leia", "leiamos", "leian"],
    indefindo: ["lei", "leiste", "leo", "leemos", "leeron"],
  },
  tener: {
    present: ["tengo", "tienes", "tiene", "tenemos", "tienen"],
    imperfect: ["tenia", "tenias", "tenia", "teniamos", "tenian"],
    indefindo: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvieron"],
  },
  ser: {
    present: ["soy", "eres", "es", "somos", "son"],
    imperfect: ["era", "eras", "era", "eramos", "eran"],
    indefindo: ["fui", "fuiste", "fue", "fuimos", "fueron"],
  },
};

const pronouns = ["yo", "tu", "el/ella/usted", "nosotros", "ellos/ustedes"];

const ConjugationDrill = ({
  questionQuantity,
  verbs,
  tense,
  setConjugationFormActive,
}) => {
  const [verbIndex, setVerbIndex] = useState(0);
  const [pronounIndex, setPronounIndex] = useState(0);
  const tensesTest = ["present", "imperfect", "Preterite Indefinite "];
  const [tenseIndex, setTenseIndex] = useState(1);
  const [answer, setAnswer] = useState("");

  const [questionCounter, setQuestionCounter] = useState(0);
  const [answerResults, setAnswerResults] = useState(null);

  let correctAnswers = 0;

  const [showFeedback, setShowFeedback] = useState(false);

  const updateConjugationCount = async (CorrectAnswerResult) => {
    const ConjugationCountUpdate = {
      verbsConjugated: CorrectAnswerResult,
    };

    try {
      const { data } = await ServerApi.post(
        UserDataUrl,
        ConjugationCountUpdate,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(data);
    } catch (error) {
      console.log("Error updating conjugation count:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const setQuestion = () => {
    if (tense === 1) {
      setTenseIndex(Math.floor(Math.random() * 3));
    } else if (tense === 2) {
      setTenseIndex(0);
    } else if (tense === 3) {
      setTenseIndex(1);
    } else if (tense === 4) {
      setTenseIndex(2);
    }
    setVerbIndex(Math.floor(Math.random() * 3));
    setPronounIndex(Math.floor(Math.random() * 5));
  };

  const handleclick = () => {
    setTimeout(() => {
      setConjugationFormActive(false);
    }, 1000);
  };

  let activeVerbs = {};
  if (verbs === 1) {
    activeVerbs = { ...commonVerbs };
  } else {
    activeVerbs = { ...irregularVerbs };
  }

  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const submitAnswer = () => {
    const differentTenses = Object.values(activeVerbs)[verbIndex];
    const expectedAnswer =
      Object.values(differentTenses)[tenseIndex][pronounIndex];

    if (answer === expectedAnswer) {
      setAnswerResults(true);
      setTimeout(() => {
        setQuestionCounter(questionCounter + 1);
        correctAnswers = correctAnswers + 1;
        setQuestion();
        setAnswer("");
        setAnswerResults(null);
      }, 2000);
    } else if (answer !== expectedAnswer) {
      setIncorrectAnswers([
        ...incorrectAnswers,
        Object.keys(activeVerbs)[verbIndex],
      ]);
      setAnswerResults(expectedAnswer);
      setTimeout(() => {
        setQuestionCounter(questionCounter + 1);
        setQuestion();
        setAnswer("");
        setAnswerResults(null);
      }, 2000);
    }

    if (questionCounter === questionQuantity - 1) {
      updateConjugationCount(questionCounter - incorrectAnswers.length);
    }
  };

  useEffect(() => {
    setQuestion();
  }, []);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitAnswer();
    }
  };

  return (
    <div>
      {questionCounter !== questionQuantity ? (
        <div className="p-8">
          <div className="  border-2 p-4 rounded-md drop-shadow-sm flex-row space-y-12 ">
            <ProgressBar value={(questionCounter / questionQuantity) * 100} />
            <div className="text-xl text-center">
              Conjugate the verb{" "}
              <span className="text-blue-500">
                {Object.keys(activeVerbs)[verbIndex]}
              </span>{" "}
              for{" "}
              <span className="text-blue-500">{pronouns[pronounIndex]}</span> in
              the tense:{" "}
              <span className="text-blue-500">{tensesTest[tenseIndex]}</span>
            </div>

            <div className=" flex justify-center">
              <input
                placeholder="Type answer here"
                value={answer}
                onInput={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyPress}
                className="p-2 border roundeds"
              />
              <br />
            </div>

            <div className="flex justify-center">
              <button className="button" onClick={submitAnswer}>
                Submit
              </button>
            </div>

            {answerResults === true ? (
              <div className="text-green-500 text-lg font-bold text-center">
                Correct !
              </div>
            ) : answerResults === null ? (
              <></>
            ) : (
              <div className="text-red-500 text-xl font-bold text-center">
                <p>Wrong !</p>
                <br />
                <p> The correct answer is : {answerResults}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="p-8">
            <div className="text-xl text-center">
              You've finished ! You scored {correctAnswers} / {questionQuantity}
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={handleclick} className="btn">
                Try Again
              </button>
            </div>
          </div>

          <div className="p-3 flex flex-col">
            <span className="text-lg font-bold mb-2 text-center">
              Revise the verbs you got incorrect
            </span>
            <div className="flex justify-center mb-4">
              <ImportExportIcon
                style={{ fontSize: "32px" }}
                onClick={() => setShowFeedback(!showFeedback)}
                className="cursor-pointer"
              />
            </div>
            {showFeedback && (
              <div className="feedback">
                {removeDuplicates(incorrectAnswers).map((item, key) => (
                  <Table index={key} verb={item} verbData={activeVerbs[item]} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConjugationDrill;
