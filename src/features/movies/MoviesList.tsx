import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "./moviesSlice";

export function MoviesList() {
    const movies = useSelector(selectMovies);
    return (
        <ul>
            {movies.map(({ name, author, releaseDate }, index) => (
                <li key={index}>
                    Name : {name}, Author : {author}, Release date :{" "}
                    {new Date(releaseDate).toLocaleDateString()}
                </li>
            ))}
        </ul>
    );
}
