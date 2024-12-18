import React, { useState, useEffect } from "react";
import Api from "../../api/movieApi";

const genres = ["Action", "Drama", "Comedy", "Horror"];
const languages = ["English", "Hindi", "French", "Spanish"];
const durations = [1, 2, 3];

const CreateMoviePopup = ({ setPopups, popups }) => {
  const [selectedGenreOptions, setSelectedGenreOptions] = useState([]);
  const [selectedLangOptions, setSelectedLangOptions] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 0,
    genre: [],
    language: [],
    releaseData: "",
    poster: "",
  });

  // Synchronize genre and language selections with formData
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      genre: selectedGenreOptions,
      language: selectedLangOptions,
    }));
  }, [selectedGenreOptions, selectedLangOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "releaseData") {
      let [year, month, date] = value.split("-");
      let dateFormat = `${month}/${date}/${year}`;
      setFormData({ ...formData, [name]: dateFormat });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMultiSelectChange = (e, key) => {
    const selectedValue = e.target.value;
    if (key === "genre") {
      setSelectedGenreOptions((prev) =>
        prev.includes(selectedValue)
          ? prev.filter((val) => val !== selectedValue)
          : [...prev, selectedValue]
      );
    } else if (key === "lang") {
      setSelectedLangOptions((prev) =>
        prev.includes(selectedValue)
          ? prev.filter((val) => val !== selectedValue)
          : [...prev, selectedValue]
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        duration: Number(formData.duration),
      };
      const response = await Api.createMovie(payload);

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="w-full mx-auto p-6 bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Movie Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Duration
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select duration</option>
              {durations.map((duration, idx) => (
                <option key={duration} value={idx + 1}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          {/* Genre */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Genre
            </label>
            <select
              name="genre"
              multiple
              value={selectedGenreOptions}
              onChange={(e) => handleMultiSelectChange(e, "genre")}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Language
            </label>
            <select
              name="language"
              multiple
              value={selectedLangOptions}
              onChange={(e) => handleMultiSelectChange(e, "lang")}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              name="releaseData"
              value={formData.releaseData}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="poster"
              value={formData.poster}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Submit
            </button>
            <button
              onClick={() =>
                setPopups((prev) => {
                  return { ...prev, createMovie: false };
                })
              }
              className="bg-red-500 text-white py-2 px-4 rounded ml-4"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMoviePopup;
