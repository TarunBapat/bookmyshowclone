import React from "react";

const CreateTheatrePopup = ({ setPopups, popups }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Popup</h2>
        <button
          onClick={() =>
            setPopups((prev) => {
              return { ...prev, createTheatre: false };
            })
          }
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateTheatrePopup;
