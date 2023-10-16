import React, { useState } from "react";

const Past = () => {
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
    const isExercise1Correct = answers.exercise1.toLowerCase() === "hablé";
    const isExercise2Correct = answers.exercise2.toLowerCase() === "comimos";

    if (isExercise1Correct && isExercise2Correct) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Oops! Not all answers are correct. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Understanding the Past Tense in Spanish
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="mb-2">
          The past tense in Spanish is used to talk about actions or events that
          have already happened. It allows us to discuss experiences, describe
          past situations, and tell stories.
        </p>
        <p>
          In this section, we'll learn how to conjugate verbs in the past tense
          and explore some common scenarios where it's used.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Conjugating Verbs in the Past Tense
        </h2>
        <p className="mb-2">
          To form the past tense in Spanish, we generally use specific endings
          based on the subject pronoun. Here are the endings for regular -ar
          verbs:
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p>yo -é</p>
          <p>tú -aste</p>
          <p>él/ella/usted -ó</p>
          <p>nosotros/nosotras -amos</p>
          <p>vosotros/vosotras -asteis</p>
          <p>ellos/ellas/ustedes -aron</p>
        </div>
        <p>
          For example, to say "I spoke" in Spanish, we use the past tense form
          of the verb "hablar": "yo habl<strong>é</strong>."
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Practice Exercises</h2>
        <p className="mb-4">
          Test your understanding of the past tense with the following
          exercises. Choose the correct form of the verb to complete each
          sentence.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>1. Yo ______ (hablar) con el profesor ayer.</p>
              <input
                type="text"
                value={answers.exercise1}
                onChange={(e) => handleChange(e, "exercise1")}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div>
              <p>2. Nosotros ______ (comer) pizza anoche.</p>
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
        <h2 className="text-2xl font-bold mb-2">When to Use the Past Tense</h2>
        <p className="mb-2">
          The past tense is used to talk about actions or events that have
          already happened. Here are some common scenarios where it's used:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Describing past experiences:{" "}
            <em>
              Ayer, yo <strong>hablé</strong> con el profesor.
            </em>{" "}
            (Yesterday, I spoke with the teacher.)
          </li>
          <li>
            Narrating a story:{" "}
            <em>
              Érase una vez, un niño que <strong>soñó</strong> con ser
              astronauta.
            </em>{" "}
            (Once upon a time, a boy dreamed of being an astronaut.)
          </li>
          {/* Add more examples */}
        </ul>
      </div>
    </div>
  );
};

export default Past;
