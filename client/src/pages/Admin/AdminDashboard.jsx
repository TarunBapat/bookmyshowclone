import { useEffect, useState } from "react";
import Api from "../../api/movieApi";
import Api1 from "../../api/theatreApi";
import Api2 from "../../api/showApi";
import CreateMoviePopup from "../../components/popups/CreateMoviePopup";
import EditMoviePopup from "../../components/popups/EditMoviePopup";
import DeleteMoviePopup from "../../components/popups/DeleteMoviePopup";
import CreateTheatrePopup from "../../components/popups/CreateTheatrePopup";
import EditTheatrePopup from "../../components/popups/EditTheatrePopup";
import DeleteTheatrePopup from "../../components/popups/DeleteTheatrePopup";

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const SectionSplit = ["Movie", "Theatre", "Shows"];
  const [deleteKey, setDeleteKey] = useState("");
  const [popups, setPopups] = useState({
    createMovie: false,
    editMovie: false,
    deleteMovie: false,
    createTheatre: false,
    editTheatre: false,
    deleteTheatre: false,
  });

  const popupContent = {
    createMovie: <CreateMoviePopup setPopups={setPopups} />,
    editMovie: <EditMoviePopup setPopups={setPopups} />,
    deleteMovie: (
      <DeleteMoviePopup deleteKey={deleteKey} setPopups={setPopups} />
    ),
    createTheatre: <CreateTheatrePopup setPopups={setPopups} />,
    editTheatre: <EditTheatrePopup setPopups={setPopups} />,
    deleteTheatre: (
      <DeleteTheatrePopup deleteKey={deleteKey} setPopups={setPopups} />
    ),
  };
  const handlePopupClick = (key) => {
    setPopups((prev) => {
      return { ...prev, [key]: !popups[key] };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // First API Call
        const response1 = await Api.allMovies();
        const result1 = response1.data.movie;
        setMovies(result1);

        // // Second API Call
        const response2 = await Api1.allTheatres();
        const result2 = response2.data.theatre;
        setTheatres(result2);

        // // Third API Call
        // const response3 = await fetch("https://api.example.com/endpoint3");
        // const result3 = await response3.json();
        // setData3(result3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [popups]);
  const handleDelete = (id) => {
    setDeleteKey(id);
  };
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Manage Sections
      </h1>
      {/* popus mapping */}

      {Object.keys(popups).map((popupkey) => {
        return popups[popupkey] && popupContent[popupkey];
      })}

      {/* Sections */}
      {[movies, theatres].map((section, idx) => (
        // eslint-disable-next-line react/jsx-key
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border  flex flex-col space-x-4">
          <div className=" flex justify-between gap-1 space-x-4 mb-2">
            {/* Section Heading */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Section {SectionSplit[idx]}
            </h2>
            <button
              onClick={() => handlePopupClick(`create${SectionSplit[idx]}`)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Create
            </button>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-2">
            {section.map((movie) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="flex justify-between space-x-4">
                  <div>
                    <h3>{movie.title || movie.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() =>
                        handlePopupClick(`edit${SectionSplit[idx]}`)
                      }
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handlePopupClick(`delete${SectionSplit[idx]}`);
                        handleDelete(movie?._id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
