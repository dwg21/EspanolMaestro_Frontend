import { useContext, useEffect } from "react";

import { Cards } from "../components";

import AuthContext from "../context/AuthProvider";

import CelebrationIcon from "@mui/icons-material/Celebration";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TranslateIcon from "@mui/icons-material/Translate";

const Home = () => {
  const { getUserData, userData } = useContext(AuthContext);
  console.log(userData);

  //Checks if user data has not been fetched
  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      getUserData();
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl m-4 text-center heading">
        Welcome back {userData ? userData.Username : "user"}
      </h2>

      <div className="userData">
        <p className="text-center">
          Español Maestro is your number 1 tool for learning Spanish. Featuring
          several unique exercises designed to help reinforce your memory and
          assist your learning.
        </p>
        <h3 className=" font-bold text-center m-2 text-2xl ">
          Your progress so far{" "}
        </h3>
        {userData && userData.vocabularyCount && (
          <div className=" flex flex-col md:flex-row gap-4 justify-center items-center ">
            <div className=" bg-slate-300 p-6 mb-6 rounded-lg shadow-lg w-[300px] h-[250px] flex flex-col justify-center items-center gap-2">
              <p className="text-xl font-bold mb-2">
                You've been on a learning spree!
              </p>

              <CelebrationIcon sx={{ fontSize: 60, color: "#0a66c2" }} />
              <p className="text-gray-700 mb-4">
                You've mastered{" "}
                <span className=" font-extrabold">
                  {userData.vocabularyCount.length}
                </span>{" "}
                new words with the vocabulary drill.
              </p>
            </div>

            {userData.ConjugationCount && (
              <div className=" bg-slate-300 p-6 mb-6 rounded-lg shadow-lg w-[300px] h-[250px] flex flex-col justify-center items-center gap-2">
                <p className="text-xl font-bold mb-2">Verb Conjugation Whiz!</p>
                <AutoFixHighIcon sx={{ fontSize: 60, color: "#0a66c2" }} />
                <p className="text-gray-700 mb-4">
                  You've successfully conjugated{" "}
                  <span className=" font-extrabold">
                    {" "}
                    {userData.ConjugationCount}{" "}
                  </span>
                  verbs.
                </p>
              </div>
            )}

            {userData.PastTranslations && (
              <div className="bg-slate-300 p-6 mb-6 rounded-lg shadow-lg w-[300px] h-[250px] flex flex-col justify-center items-center gap-2">
                <p className="text-xl font-bold mb-2">Translation Maestro!</p>
                <TranslateIcon sx={{ fontSize: 60, color: "#0a66c2" }} />
                <p className="text-gray-700 mb-4">
                  You've used the Translation tool{" "}
                  <span className=" font-extrabold">
                    {userData.PastTranslations.length}
                  </span>{" "}
                  times.
                </p>
              </div>
            )}
          </div>
        )}

        {/* { (
            <Counter
              title="Words Learnt"
              value={userData.vocabularyCount.length}
            />
          ) : (
            <p className="dataMessage">Login to see Data</p>
          )} */}
        {/* {userData.ConjugationCount ? (
            <Counter
              title="Words Conjugated"
              value={userData.ConjugationCount}
            />
          ) : (
            ""
          )} */}
      </div>

      <Cards />

      <div className="text-center p-4">
        <p>More Features coming soon.</p>
      </div>
    </div>
  );
};

export default Home;
