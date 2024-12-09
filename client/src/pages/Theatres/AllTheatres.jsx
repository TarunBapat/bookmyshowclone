import React, { useEffect, useState } from "react";
import Api from "../../api/showApi";
import { useNavigate, useParams } from "react-router-dom";

const AllTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { movieId } = useParams();

  function mapShowsWithTheatres(data) {
    console.log("herewte", data);
    const obj = data?.reduce((acc, show) => {
      if (!acc[show?.theatre._id]) {
        acc[show?.theatre._id] = {
          ...show?.theatre,
          shows: [{ name: show?.name, time: show?.time }],
        };
      } else {
        acc[show?.theatre?._id]?.shows?.push({
          name: show?.name,
          time: show?.time,
        });
      }
      return acc;
    }, {});
    console.log("objobjobjobjobjobj", Object.values(obj));
    return Object.values(obj);
  }
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Api.getShows(movieId);
        const data = response?.data?.movieData;
        setTheatres(mapShowsWithTheatres(data));
      } catch (error) {
        console.log("here");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Theatre List</h1>
      {theatres.length === 0 ? (
        <p className="text-center text-gray-600">No theatres available.</p>
      ) : (
        <div className="container mx-auto p-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Theatres and Shows
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {theatres.map((theatre, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Theatre Details */}
                <div className="p-5 md:w-1/3 border-r border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {theatre.name}
                  </h2>
                  <p className="text-gray-600">{theatre.address}</p>
                  <p className="text-gray-600">{theatre.location}</p>
                </div>

                {/* Shows */}
                <div className="p-5 md:w-2/3 flex flex-wrap gap-3">
                  {theatre?.shows?.map((show, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full"
                    >
                      {show.time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTheatres;
