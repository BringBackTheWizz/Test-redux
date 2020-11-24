import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Movie {
    name: string;
    author: string;
    releaseDate: number;
}
type MoviesState = Array<Movie>;

const initialState: MoviesState = [
    {
        name: "The Room",
        author: "Tommy Wiseau",
        releaseDate: new Date(2003, 5, 27).getTime(),
    },
];

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            return [...state, action.payload];
        },
    },
});

export const { add } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
