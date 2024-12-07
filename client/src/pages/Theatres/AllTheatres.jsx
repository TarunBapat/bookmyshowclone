import React, { useEffect, useState } from "react";
import Api from "../../api/theatreApi";
import { useNavigate } from "react-router-dom";

const AllTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Api.allTheatres();

        console.log("responseresponseresponse", response);
        const data = response.data.theatre;
        setTheatres(data);
      } catch (error) {
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
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {theatres.map((theatre) => (
            <div
              key={theatre.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => navigate(`/theatres/${theatre._id}`)}
            >
              <h2 className="text-xl font-semibold mb-2">{theatre.name}</h2>
              <p className="text-gray-700">
                <strong>Address:</strong> {theatre.location}
              </p>

              <p className="text-gray-700">
                <strong>Contact:</strong> {theatre.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTheatres;
