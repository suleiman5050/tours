import { useEffect, useState } from "react";
import Tours from "./Tours";
import "./App.css";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const deleteTour = (id) => {
    let newTours = tours.filter((tour) => id !== tour.id);
    setTour(newTours);
  };
  const fetchTour = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTour(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        {" "}
        <button
          className="btn"
          onClick={() => {
            fetchTour();
          }}
        >
          {" "}
          click to fetch more tours
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
