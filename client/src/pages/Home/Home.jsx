import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Brands = [
  {
    title: "Pushpa",
    poster:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    description: "The rise of a smuggler in the red sandalwood industry.",
  },
  {
    title: "RRR",
    poster:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1733903820936_11decasb1240x300.jpg",
    description: "A fictional story about India's freedom fighters.",
  },
  {
    title: "KGF",
    poster:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1733903820936_11decasb1240x300.jpg",
    description: "A young man's journey to power in the gold fields.",
  },
];
const movies = [
  {
    title: "Pushpa",
    poster:
      "https://www.hindustantimes.com/ht-img/img/2024/04/08/1600x900/Allu_Arjun_Pushpa_look_1712563294862_1712563305669.jpg",
    description: "The rise of a smuggler in the red sandalwood industry.",
  },
  {
    title: "RRR",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    description: "A fictional story about India's freedom fighters.",
  },
  {
    title: "KGF",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtMzNvIhyMUf0qCV9ycWfJSQO6vdoJkLCPQ&s",
    description: "A young man's journey to power in the gold fields.",
  },
  {
    title: "Singham",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/ac/Singham_%282011_Hindi_film%29_Theatrical_poster.jpg",
    description: "A fearless cop takes on corruption.",
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Carousel */}
      <div className="max-w-6xl mx-auto p-4">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={2000}
          showStatus={false}
          dynamicHeight={50}
        >
          {Brands.map((movie, index) => (
            <div key={index}>
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-lg"
                height="200px"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Movie Listings */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
