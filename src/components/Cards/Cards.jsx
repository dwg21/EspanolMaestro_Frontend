import React from "react";
import { Link } from "react-router-dom";

import "./cards.css";

const Cards = () => {
  return (
    <div className="body">
      <div className="page-content">
        <div className="card bg-white border border-gray-300 shadow-lg p-4 mb-4 rounded-md">
          <div className="content">
            <h2 className="title text-2xl mb-2">Translation</h2>
            <p className="copy">
              Using advanced AI technology, translate between English and
              Spanish.
            </p>
            <Link to="/translator">
              <button className="btn">Vamos!</button>
            </Link>
          </div>
        </div>
        <div className="card bg-white border border-gray-300 shadow-lg p-4 mb-4 rounded-md">
          <div className="content">
            <h2 className="title text-2xl mb-2">Vocabulary Practice</h2>
            <p className="copy">
              Remembering vocabulary can be one of the hardest things about
              learning a language.
            </p>
            <Link to="/vocabulary">
              <button className="btn">Vamos!</button>
            </Link>
          </div>
        </div>

        <div className="card bg-white border border-gray-300 shadow-lg p-4 mb-4 rounded-md">
          <div className="content">
            <h2 className="title text-2xl mb-2">Conjugation Practice</h2>
            <p className="copy">
              Practice and perfect your Spanish verb conjugations.
            </p>
            <Link to="/conjugation">
              <button className="btn">Vamos!</button>
            </Link>
          </div>
        </div>

        <div className="card bg-white border border-gray-300 shadow-lg p-4 mb-4 rounded-md">
          <div className="content">
            <h2 className="title text-2xl mb-2">Reading</h2>
            <p className="copy">
              Practice your reaidng comprenshion with this reading tool
            </p>
            <Link to="/reading">
              <button className="btn">Vamos!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
