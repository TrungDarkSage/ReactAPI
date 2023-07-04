import React, { useState } from "react";
import MovieList from "./Component/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // // sample for Fetch

  // const fetchMovieHandler = () => {
  //   // hàm fecth được tích hợp sẵn với tham số là 1 url
  //   fetch("https://swapi.dev/api/films/")
  //     // hàm then được gọi nếu muốn nhận phản hồi, ở đây là responsive
  //     .then((res) => {
  //       // res là 1 file json, hàm json có tác dụng chuyển thành object
  //       return res.json();
  //     })
  //     // tiếp tục dùng then nhận data
  //     .then((data) => {
  //       const transform = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           producer: movieData.producer,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transform);
  //       console.log();
  //     });
  // };

  // async await
  async function fetchMovieHandler() {
    setIsLoading(true);
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();

    const transform = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
        directorText: movieData.director,
        // op: movieData.opening_crawl,
        // opening_crawl: movieData.opening_crawl,
      };
    });
    setIsLoading(false);
    setMovies(transform);
    console.log(data);
  }

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Not found film !!!</p>}
        {isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#646464"
              fill="none"
              stroke-width="5"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="2s"
                repeatCount="indefinite"
                from="0,150"
                to="150,150"
                begin="0s"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                repeatCount="indefinite"
                from="-75"
                to="-225"
                begin="0s"
              />
            </circle>
          </svg>
        )}
      </section>
    </>
  );
}
export default App;
