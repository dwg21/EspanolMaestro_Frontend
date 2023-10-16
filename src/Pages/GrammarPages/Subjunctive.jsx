import React, { useState } from "react";

const Subjunctive = () => {
  const [feedback, setFeedback] = useState(null);

  const [answers, setAnswers] = useState({
    exercise1: "",
    exercise2: "",
    // Add more exercises as needed
  });

  const handleChange = (event, exercise) => {
    const { value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      [exercise]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to check answers if needed
    // Add logic to check answers
    const isExercise1Correct = answers.exercise1.toLowerCase() === "venga";
    const isExercise2Correct = answers.exercise2.toLowerCase() === "pueda";

    if (isExercise1Correct && isExercise2Correct) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Oops! Not all answers are correct. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Understanding the Subjunctive Mood in Spanish
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="mb-2">
          The subjunctive mood is a verb form used to express various states of
          unreality, such as doubt, possibility, necessity, or action that has
          not yet occurred. In Spanish, it's commonly used in situations that
          involve emotions, desires, recommendations, and hypothetical
          scenarios.
        </p>
        <p>
          Unlike the indicative mood, which is used to state facts or ask direct
          questions, the subjunctive conveys more subjective or uncertain
          information.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">When to Use Subjunctive</h2>
        <p className="mb-2">
          The subjunctive mood is used in various situations where there is an
          element of uncertainty, doubt, desire, or emotion. Here are some
          common scenarios when the subjunctive is employed in Spanish:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Expressing doubt or uncertainty:{" "}
            <em>
              No creo que él <strong>haya</strong> llegado.
            </em>{" "}
            (I don't believe he has arrived.)
          </li>
          <li>
            Making recommendations or giving advice:{" "}
            <em>
              Es importante que tú <strong>estudies</strong> para el examen.
            </em>{" "}
            (It's important that you study for the exam.)
          </li>
          <li>
            Expressing desires or wishes:{" "}
            <em>
              Quiero que ella <strong>sea</strong> feliz.
            </em>{" "}
            (I want her to be happy.)
          </li>
          <li>
            Impersonal expressions and statements of necessity:{" "}
            <em>
              Es necesario que todos <strong>asistan</strong> a la reunión.
            </em>{" "}
            (It's necessary that everyone attend the meeting.)
          </li>
          <li>
            Emotions and feelings:{" "}
            <em>
              Me alegra que tú <strong>hayas</strong> tenido éxito.
            </em>{" "}
            (I'm glad that you've had success.)
          </li>
          <li>
            Expressing uncertainty or disbelief:{" "}
            <em>
              Dudo que él <strong>pueda</strong> hacerlo.
            </em>{" "}
            (I doubt that he can do it.)
          </li>
          <li>
            Giving subjective opinions:{" "}
            <em>
              Es posible que ellos <strong>tengan</strong> razón.
            </em>{" "}
            (It's possible that they are right.)
          </li>
          <li>
            Talking about hypothetical situations:{" "}
            <em>
              Si yo <strong>fuera</strong> rico, viajaría por el mundo.
            </em>{" "}
            (If I were rich, I would travel the world.)
          </li>
          {/* Add more items */}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">How to Form Subjunctive</h2>
        <p className="mb-2">
          To form the subjunctive mood, you'll need to follow specific
          conjugation rules depending on the verb tense and type of verb. Here
          are some general guidelines for different tenses:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Present Subjunctive:
            <br />
            For regular -ar verbs, remove the -ar ending and add the appropriate
            subjunctive endings. For example,
            <br />
            <strong>hablar</strong> (to speak) &rarr;{" "}
            <strong>hable, hables, hablemos, habléis, hablen</strong>
          </li>
          <li>
            For regular -er and -ir verbs, remove the -er or -ir ending and add
            the appropriate subjunctive endings. For example,
            <br />
            <strong>comer</strong> (to eat) &rarr;{" "}
            <strong>coma, comas, comamos, comáis, coman</strong>
            <br />
            <strong>vivir</strong> (to live) &rarr;{" "}
            <strong>viva, vivas, vivamos, viváis, vivan</strong>
          </li>
          <li>
            Irregular verbs have their own unique conjugation patterns. It's
            essential to memorize these irregular forms.
          </li>

          <li>
            Past Subjunctive:
            <br />
            The past subjunctive is formed by taking the third person plural
            form of the preterite tense, dropping the -ron ending, and adding
            the appropriate subjunctive endings. For example,
            <br />
            <strong>hablar</strong> (ellos hablaron) &rarr;{" "}
            <strong>
              hablara, hablaras, hablara, habláramos, hablarais, hablaran
            </strong>
          </li>
          {/* Add more tenses as needed */}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Subjunctive vs Indicative</h2>
        <p className="mb-2">
          The subjunctive and indicative moods serve different purposes in
          Spanish. Understanding when to use each is crucial for clear and
          accurate communication. Here are some key differences:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Indicative:{" "}
            <em>
              Juan <strong>habla</strong> español.
            </em>{" "}
            (Juan speaks Spanish.)
            <br />
            Subjunctive:{" "}
            <em>
              Espero que Juan <strong>hable</strong> español.
            </em>{" "}
            (I hope Juan speaks Spanish.)
          </li>
          <li>
            Indicative:{" "}
            <em>
              Mi hermana <strong>está</strong> en casa.
            </em>{" "}
            (My sister is at home.)
            <br />
            Subjunctive:{" "}
            <em>
              Espero que mi hermana <strong>esté</strong> en casa.
            </em>{" "}
            (I hope my sister is at home.)
          </li>
        </ul>
        <p>
          In the first example, the indicative mood is used to state a fact
          about Juan. In the second example, the subjunctive is used because
          there is an element of uncertainty or doubt involved.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Subjunctive Triggers</h2>
        <p className="mb-2">
          Certain words and phrases act as triggers that indicate the use of the
          subjunctive mood in a sentence. Recognizing these triggers is
          important for applying the subjunctive correctly. Here are some common
          subjunctive triggers in Spanish:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Expressions of doubt or uncertainty: <em>dudar que</em> (to doubt
            that), <em>no creer que</em> (not to believe that)
          </li>
          <li>
            Emotions and feelings: <em>alegrarse de que</em> (to be glad that),{" "}
            <em>sentir que</em> (to be sorry that)
          </li>
          <li>
            Impersonal expressions: <em>es posible que</em> (it's possible
            that), <em>es necesario que</em> (it's necessary that)
          </li>
          <li>
            Recommendations or suggestions: <em>recomendar que</em> (to
            recommend that), <em>aconsejar que</em> (to advise that)
          </li>
        </ul>
        <p>
          When you encounter these triggers, it's a strong indication that the
          subjunctive mood should be used in the dependent clause of the
          sentence.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Practice Exercises</h2>
        <p className="mb-4">
          Test your understanding of the subjunctive mood with the following
          exercises. Choose the correct form of the verb to complete each
          sentence.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>1. Espero que tú ______ (venir) a la fiesta.</p>
              <input
                type="text"
                value={answers.exercise1}
                onChange={(e) => handleChange(e, "exercise1")}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div>
              <p>2. No creo que él ______ (poder) resolver el problema.</p>
              <input
                type="text"
                value={answers.exercise2}
                onChange={(e) => handleChange(e, "exercise2")}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            {/* Add more exercises */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
          >
            Submit
          </button>
          {feedback && (
            <div
              className={`mt-4 ${
                feedback.includes("Correct") ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Subjunctive;
