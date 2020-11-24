import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Movie, add } from "./moviesSlice";

export function AddMovie() {
    const dispatch = useDispatch();
    const [isMovieAdded, setIsMovieAdded] = useState(false);
    const [movieToAdd, setMovieToAdd] = useState({
        name: "",
        author: "",
        releaseDate: new Date().getTime(),
    } as Movie);
    return (
        <>
            <form>
                <label htmlFor="name">Name : </label>
                <input
                    name="name"
                    onInput={(event) =>
                        setMovieToAdd({
                            ...movieToAdd,
                            name: (event.target as HTMLInputElement).value,
                        })
                    }
                />
                <label htmlFor="author">Author : </label>
                <input
                    name="author"
                    onInput={(event) =>
                        setMovieToAdd({
                            ...movieToAdd,
                            author: (event.target as HTMLInputElement).value,
                        })
                    }
                />
                <label htmlFor="releaseDate">Release Date : </label>
                <input
                    name="releaseDate"
                    onInput={(event) =>
                        setMovieToAdd({
                            ...movieToAdd,
                            releaseDate: new Date(
                                (event.target as HTMLInputElement).value
                            ).getTime(),
                        })
                    }
                    type="date"
                />
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        dispatch(add(movieToAdd));
                        setIsMovieAdded(true);
                    }}
                >
                    Validate
                </button>
            </form>
            {isMovieAdded && <p>Movie was added to the list !</p>}
        </>
    );
}
