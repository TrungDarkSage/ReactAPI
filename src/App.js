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
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();

    const transform = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        director: movieData.director,
        op: movieData.opening_crawl,
        title: movieData.title,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transform);
    console.log(movies.title);
  }

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </>
  );
}
export default App;
