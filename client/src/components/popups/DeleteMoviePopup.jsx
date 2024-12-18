import React from "react";
import Api from "../../api/movieApi";

const DeleteMoviePopup = ({ deleteKey, setPopups }) => {
  async function deleteHandler(movieId) {
    try {
      const response = await Api.deleteMovie(movieId);
      console.log("deleteKey response", response);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
        <p className="text-gray-600 mb-6">
          Do you really want to delete this item? This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              deleteHandler(deleteKey);
              setPopups((prev) => {
                return { ...prev, deleteMovie: false };
              });
            }}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
          <button
            onClick={() =>
              setPopups((prev) => {
                return { ...prev, deleteMovie: false };
              })
            }
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMoviePopup;
