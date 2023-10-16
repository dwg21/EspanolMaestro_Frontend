import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import DeleteIcon from "@mui/icons-material/Delete";
const UserDataUrl = "api/v1/userdata";

import ServerApi from "../Axios/ServerApi";

const User = () => {
  const { userData, getUserData } = useContext(AuthContext);

  const [customWords, setCustomWords] = useState([]);

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      getUserData();
    }
  }, []);

  useEffect(() => {
    if (userData.newWords) {
      setCustomWords(userData.newWords);
    }
  }, [userData.newWords]);

  const handleDeleteWord = (index) => {
    const updatedWords = [...customWords];
    updatedWords.splice(index, 1);
    setCustomWords(updatedWords);
    updateToDB(updatedWords);
    // Assuming you have a function to update user data after deletion
    // For example: updateUserWords(updatedWords);
  };

  //Sends updated custom word list to db
  const updateToDB = async (updatedWords) => {
    const DataTobeSent = {
      editedNewWords: updatedWords,
    };

    try {
      const { data } = await ServerApi.post(UserDataUrl, DataTobeSent);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      {userData.Username ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Hi {userData.Username}</h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              Words Learnt using our Vocabulary Tool
            </h2>
            <ul>
              {userData.vocabularyCount.map((word, index) => (
                <li
                  key={index}
                  className="  p-1 border-b-2 ml-4 w-[60%] text-center"
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Custom words</h2>
            <p>
              These are alll the new words you have learnt using the reading
              tool, Use the vocab tool to memorize them and delete the word once
              you feel confident you will remember it.
            </p>

            <ul className="w-[200px]">
              {customWords.map((word, index) => (
                <li key={index} className="flex items-center py-1">
                  <span className="mr-1">{word}</span>
                  <DeleteIcon
                    onClick={() => handleDeleteWord(index)}
                    className="ml-auto text-red-500 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-xl font-bold">Log in to see</div>
      )}
    </div>
  );
};

export default User;
