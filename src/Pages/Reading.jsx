import React, { useState } from "react";
import { Reader, ReaderForm } from "../components";

const Reading = () => {
  const [readerActive, setReaderActive] = useState(false);
  const [readerData, setReaderData] = useState("No Data seleted");

  return (
    <div className="p-4 flex w-full justify-center">
      {readerActive ? (
        <Reader readerData={readerData} />
      ) : (
        <ReaderForm
          setReaderActive={setReaderActive}
          setReaderData={setReaderData}
        />
      )}
    </div>
  );
};

export default Reading;
