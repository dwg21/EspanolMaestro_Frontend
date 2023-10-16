import React from "react";
import PropTypes from "prop-types";

function LinearProgressWithLabel({ value }) {
  return (
    <div className="flex items-center">
      <div className="w-full mr-1">
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${value}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="min-w-4">
        <span className="text-xs text-gray-700">{`${Math.round(value)}%`}</span>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function ProgressBar({ value }) {
  return (
    <div className="w-full">
      <LinearProgressWithLabel value={value} />
    </div>
  );
}

export default ProgressBar;
