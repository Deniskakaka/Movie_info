import { IDetailMovie, IRecommendationMovie } from "Interfaces/interfaceClassMovie/interfaceMovie";
import { IProductionCompany } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import { BasicMethodDetailsMovieAndTV } from "../basicMethods";

export default class DetailsMovie extends BasicMethodDetailsMovieAndTV implements IDetailMovie {
    backdrop_path: string;
    budget: number;
    id: number;
    overview: string;
    production_companies: IProductionCompany[];
    release_date: string;
    runtime: number;
    spoken_languages: { name: string; }[];
    title: string;
    vote_average: number;
    homepage: string;
    revenue: number;
    original_language: string;
    genres: { id: number, name: string }[]
    status: string;
    links: { facebook: string, twitter: string, instagram: string }

    constructor(
        backdrop_path: string,
        budget: number,
        id: number,
        overview: string,
        production_companies: IProductionCompany[],
        release_date: string,
        runtime: number,
        spoken_languages: { name: string; }[],
        title: string,
        vote_average: number,
        homepage: string,
        revenue: number,
        original_language: string,
        genres: { id: number, name: string }[],
        status: string,
    ) {
        super(backdrop_path, release_date, revenue, runtime, budget);
        this.backdrop_path = backdrop_path,
            this.budget = budget,
            this.id = id,
            this.overview = overview,
            this.production_companies = production_companies,
            this.release_date = release_date,
            this.runtime = runtime,
            this.spoken_languages = spoken_languages,
            this.title = title,
            this.vote_average = vote_average,
            this.homepage = homepage,
            this.revenue = revenue,
            this.original_language = original_language,
            this.genres = genres,
            this.status = status
    }
};

export class RecommendationMovie implements IRecommendationMovie {
    title: string;
    release_date: string;
    vote_average: number;
    id: number;
    poster_path: string;

    constructor(
        title: string,
        release_date: string,
        vote_average: number,
        id: number,
        poster_path: string
    ) {
        this.title = title,
        this.release_date = release_date,
        this.vote_average = vote_average,
        this.id = id,
        this.poster_path = poster_path
    }
    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.poster_path}`;
    getRelease_date = () => this.release_date.split('-').reverse().join('/');
    getVote_average = () => this.vote_average;
}