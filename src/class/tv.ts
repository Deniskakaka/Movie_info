import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

class TV implements ITV {
    readonly poster_path: string;
    readonly id: number;
    readonly backdrop_path: string;
    readonly vote_average: number;
    readonly overview: string;
    readonly first_air_date: string;
    readonly origin_country: string[];
    readonly original_language: string;
    readonly original_title: string;
    public trailer: ITrailerMovie[] | []

    constructor(
        poster_path: string,
        id: number,
        backdrop_path: string,
        vote_average: number,
        first_air_date: string,
        origin_country: string[],
        original_language: string,
        original_title: string) {
        this.poster_path = poster_path,
            this.id = id,
            this.backdrop_path = backdrop_path,
            this.vote_average = vote_average,
            this.first_air_date = first_air_date,
            this.origin_country = origin_country,
            this.original_language = original_language,
            this.original_title = original_title
    }

    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.backdrop_path}`;

    getPoster_path = () => `https://image.tmdb.org/t/p/original/${this.poster_path}`;

    getRelease_date = () => this.first_air_date.split('-').reverse().join('/');

    getVote_average = () => this.vote_average;

};

export default TV;