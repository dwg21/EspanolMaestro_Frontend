import React, { useState } from "react";

const Future = () => {
  const [answers, setAnswers] = useState({
    exercise1: "",
    exercise2: "",
    // Add more exercises as needed
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (event, exercise) => {
    const { value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      [exercise]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add logic to check answers
    const isExercise1Correct = answers.exercise1.toLowerCase() === "hablaré";
    const isExercise2Correct = answers.exercise2.toLowerCase() === "comeremos";

    if (isExercise1Correct && isExercise2Correct) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Oops! Not all answers are correct. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Understanding the Future Tense in Spanish
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="mb-2">
          The future tense in Spanish is used to talk about actions or events
          that will happen after the present moment. It's a versatile tense that
          allows us to discuss plans, predictions, and hypothetical situations.
        </p>
        <p>
          In this section, we'll learn how to conjugate verbs in the future
          tense and explore some common scenarios where it's used.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Conjugating Verbs in the Future Tense
        </h2>
        <p className="mb-2">
          To form the future tense in Spanish, we generally use the infinitive
          form of the verb and add specific endings based on the subject
          pronoun. Here are the endings for regular verbs:
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p>yo -é</p>
          <p>tú -ás</p>
          <p>él/ella/usted -á</p>
          <p>nosotros/nosotras -emos</p>
          <p>vosotros/vosotras -éis</p>
          <p>ellos/ellas/ustedes -án</p>
        </div>
        <p>
          For example, to say "I will speak" in Spanish, we use the future tense
          form of the verb "hablar": "yo hablar<strong>é</strong>."
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Practice Exercises</h2>
        <p className="mb-4">
          Test your understanding of the future tense with the following
          exercises. Choose the correct form of the verb to complete each
          sentence.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>1. Yo ______ (hablar) con el profesor mañana.</p>
              <input
                type="text"
                value={answers.exercise1}
                onChange={(e) => handleChange(e, "exercise1")}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div>
              <p>2. Nosotros ______ (comer) pizza esta noche.</p>
              <input
                type="text"
                value={answers.exercise2}
                onChange={(e) => handleChange(e, "exercise2")}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
          >
            Submit
          </button>
        </form>
        {feedback && (
          <div
            className={`mt-4 ${
              feedback.includes("Correct") ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          When to Use the Future Tense
        </h2>
        <p className="mb-2">
          The future tense is used to talk about actions or events that will
          happen after the present moment. Here are some common scenarios where
          it's used:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Making predictions:{" "}
            <em>
              Mañana <strong>será</strong> un día soleado.
            </em>{" "}
            (Tomorrow will be a sunny day.)
          </li>
          <li>
            Talking about plans and intentions:{" "}
            <em>
              El próximo año, yo <strong>viajaré</strong> a España.
            </em>{" "}
            (Next year, I will travel to Spain.)
          </li>
          {/* Add more examples */}
        </ul>
      </div>
    </div>
  );
};

export default Future;
