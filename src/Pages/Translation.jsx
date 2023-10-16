import { Typography, Box, Stack, TextField, Divider } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import AuthContext from "../context/AuthProvider";
import ServerApi from "../Axios/ServerApi";

const UserDataUrl = "api/v1/userdata";
const translateURl = "/api/v1/translate ";

const Translator = () => {
  const { getUserData, userData } = useContext(AuthContext);
  const [showTranslations, SetShowTranslations] = useState(false);

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      getUserData();
    }
  }, []);

  const [translationInput, setTranslationInput] = useState("");
  const [translationOutput, setTranslationOutput] = useState("");
  const [inputLanaguage, setInputLanaguage] = useState("EN");
  const [outputLanaguage, setOutputLanaguage] = useState("ES");

  // const TranslationData = {
  //   input: "hello how are you",
  //   sourceLang: "EN",
  //   targetLang: "ES",
  // };

  const GetTranslation = async () => {
    const TranslationData = {
      input: translationInput,
      sourceLang: inputLanaguage,
      targetLang: outputLanaguage,
    };

    try {
      const { data } = await ServerApi.post(translateURl, TranslationData);
      setTranslationOutput(data);
      //updated to db
      updateToDB(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateToDB = async (result) => {
    const TranslationRecord = {
      translation: [translationInput, result],
    };

    try {
      const { data } = await ServerApi.post(UserDataUrl, TranslationRecord);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickswitch = () => {
    if (inputLanaguage === "EN") {
      setInputLanaguage("ES");
      setOutputLanaguage("EN");
    } else {
      setInputLanaguage("EN");
      setOutputLanaguage("ES");
    }
  };

  return (
    <div className="p-4 bg-white flex items-center justify-center flex-col ">
      <div className="max-w-[1200px] w-full ">
        <h5 className="text-xl mb-4 heading p-2 text-center">Translator</h5>
        <div className="flex justify-around mb-4 w-full ">
          <span className="subheading">
            {inputLanaguage === "EN" ? "English" : "Spanish"}
          </span>
          <div className="swapIcon">
            <SwapHorizIcon
              style={{ fontSize: "42px" }}
              onClick={handleClickswitch}
            />
          </div>
          <span className="subheading">
            {inputLanaguage === "EN" ? "Spanish" : "English"}
          </span>
        </div>

        <div className=" p-3 w-full md:flex gap-4">
          <form className="flex-1 " noValidate autoComplete="off">
            <textarea
              value={translationInput}
              id="outlined-multiline-flexible fullWidth"
              placeholder={
                inputLanaguage === "EN"
                  ? "Enter English here"
                  : "Enter Spanish Here"
              }
              className="w-full h-64 resize-none border border-gray-300 p-2"
              onChange={(e) => setTranslationInput(e.target.value)}
            />
          </form>

          <div className="flex-1">
            <div className="flex p-2 border border-gray-300 w-full h-64 ">
              {translationOutput}
            </div>
          </div>
        </div>
      </div>

      <button className="button" onClick={GetTranslation}>
        Translate
      </button>

      <div className="">
        {userData.PastTranslations && (
          <h1
            className="showTranslationToggle m-6 text-center cursor-pointer select-none"
            onClick={() => SetShowTranslations(!showTranslations)}
          >
            View previous translations
            <VisibilityIcon className="mx-2" />
          </h1>
        )}

        {showTranslations && (
          <div className="Translations-holder p-4">
            <table className="table-auto border border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Spanish</th>
                  <th className="border px-4 py-2">English</th>
                </tr>
              </thead>
              <tbody>
                {userData.PastTranslations &&
                  userData.PastTranslations.map((translation, i) => (
                    <tr key={i}>
                      <td className="border px-4 py-2">{translation[0]}</td>
                      <td className="border px-4 py-2">{translation[1]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <br />
    </div>
  );
};

export default Translator;
