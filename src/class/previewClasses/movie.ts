import { IMovie } from "Interfaces/interfaceClassMovie/interfaceMovie";
import { BasicMethodsMovieAndTV } from "../basicMethods";

export class Movie extends BasicMethodsMovieAndTV implements IMovie {
    readonly backdrop_path: string;
    readonly id: number;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly poster_path: string;
    readonly release_date: string;
    readonly vote_average: number;

    constructor(
        backdrop_path: string,
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        poster_path: string,
        release_date: string,
        vote_average: number) {
            super(backdrop_path, poster_path, release_date, vote_average);
            this.backdrop_path = backdrop_path,
            this.id = id,
            this.original_language = original_language,
            this.original_title = original_title,
            this.overview = overview,
            this.poster_path = poster_path,
            this.release_date = release_date,
            this.vote_average = vote_average
    }
}