import React, { useEffect, useState } from "react";
import ServerApi from "../../Axios/ServerApi";
const UserDataUrl = "api/v1/userdata";

const Reader = ({ readerData }) => {
  const [newWords, setNewWords] = useState([]);
  const [showSaveWord, setShowSaveWord] = useState(false);
  const GetTranslation = async (inputedText) => {
    const TranslationData = {
      input: inputedText,
      sourceLang: "ES",
      targetLang: "EN",
    };

    try {
      const { data } = await ServerApi.post(
        "/api/v1/translate",
        TranslationData
      );
      console.log(data);
      // Check if its just a word
      function hasOnlyOneWord(inputString) {
        // Regular expression to match a single word
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/; // This includes accented characters
        return regex.test(inputString);
      }
      if (hasOnlyOneWord(inputedText) || hasOnlyOneWord(data)) {
        setSelectedText(`${inputedText}: ${data}`);
        setShowSaveWord(true);
      } else {
        setSelectedText(data);
      }
    } catch (error) {
      setSelectedText("Tranlation failed, try again later");
      console.log(error);
    }
  };
  const [selectedText, setSelectedText] = useState(null);

  const handleHighlight = () => {
    const text = window.getSelection().toString().trim();
    if (text.length >= 1) {
      GetTranslation(text);
    }
  };

  //const translatedText = await GetTranslation(text);

  const closeModal = () => {
    setSelectedText(null);
    setShowSaveWord(false);
  };

  //Saves any new learnt words to the users acount
  const updateToDB = async () => {
    const DataTobeSent = {
      newWords: newWords,
    };

    try {
      const { data } = await ServerApi.post(UserDataUrl, DataTobeSent);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAddWord = (newWord) => {
    setNewWords([...newWords, newWord]);
    //add to db
    updateToDB();
  };

  return (
    <div className="md:m-8 m-2 h-screen">
      <div className="rounded-lg shadow-md -mx-3 px-3 h-2/3 overflow-scroll">
        <div className="rounded-lg shadow-md -mx-6 px-6">
          <div
            id="book"
            className="flex rounded-lg shadow-md"
            onMouseUp={handleHighlight}
          >
            <div className="flex-1 page px-8">
              <div className="page-body min-h-72">
                <h2 className="text-center">6</h2>
                <h1 className="text-uppercase font-bold text-center text-lg leading-none mt-8 mb-6">
                  Reader
                </h1>
                <p className="text-1.125 font-serif text-justify leading-7 ">
                  {readerData}
                </p>
              </div>

              <div className="page-footer h-24 text-center text-gray-700">
                <span>101</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedText && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center overflow-hidden">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="text-gray-800 mb-2">{selectedText}</p>
            {showSaveWord && (
              <div className="p-2">
                <button
                  onClick={() => handelAddWord(selectedText)}
                  className="bg-blue-500 text-white py-2 my-2 px-4 rounded"
                >
                  Save Word
                </button>
                <p className=" text-sm italic">
                  Save this word to your list of new words so you can revise it
                  later!
                </p>
              </div>
            )}
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div id="translation-box" className="absolute"></div>

      <div className="p-5">
        <h3 className="font-bold">New words Learnt</h3>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {newWords.length >= 1 && newWords.map((word) => <li>{word}</li>)}
        </ul>
        <p className="mt-2">
          All new words will be saved to your Account so you revise them again.
        </p>
      </div>
    </div>
  );
};

export default Reader;
