import React from "react";
//import "./table.css";

const pronouns = ["yo", "tu", "el/ella/usted", "nosotros", "ellos/ustedes"];
const tenses = ["present", "imperfect", "indefinido"];

const Table = ({ verb, verbData }) => {
  return (
    <div className="m-4 p-2">
      <h3 className="text-blue-500 text-center text-lg mb-4">{verb}</h3>
      <div className="overflow-x-auto">
        <div className="flex flex-col">
          <div className="min-w-full overflow-x-auto">
            <table className="min-w-full border border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2"></th>
                  {pronouns.map((pronoun) => (
                    <th key={pronoun} className="border p-2">
                      {pronoun}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.values(verbData).map((item, index) => (
                  <tr key={item.id}>
                    <td className="border p-2 font-semibold">
                      {tenses[index]}
                    </td>
                    {Object.values(item).map((val, index) => (
                      <td key={index} className="border p-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
