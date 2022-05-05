import { IDetailTV } from "Interfaces/interfaceClassMovie/interfaceTV";
import {
    ICreatedBy,
    IlastEpisodTV,
    INetworks,
    IProductionCompanyTV,
    IRecommendationTV,
    ISeason
} from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import { BasicMethodDetailsMovieAndTV } from "../basicMethods";

export default class DetailTV extends BasicMethodDetailsMovieAndTV implements IDetailTV {
    backdrop_path: string;
    created_by: ICreatedBy[];
    first_air_date: string;
    homepage: string;
    episode_run_time: number[];
    languages: string[];
    last_episode_to_air: IlastEpisodTV;
    name: string;
    networks: INetworks[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string;
    original_name: string;
    overview: string;
    poster_path: string;
    production_companies: IProductionCompanyTV[];
    seasons: ISeason[];
    vote_average: number;
    id: number;
    original_language: string;
    genres: { id: number; name: string; }[];
    status: string;

    constructor(
        backdrop_path: string,
        created_by: ICreatedBy[],
        first_air_date: string,
        homepage: string,
        episode_run_time: number[],
        languages: string[],
        last_episode_to_air: IlastEpisodTV,
        name: string,
        networks: INetworks[],
        number_of_episodes: number,
        number_of_seasons: number,
        origin_country: string,
        original_name: string,
        overview: string,
        poster_path: string,
        production_companies: IProductionCompanyTV[],
        seasons: ISeason[],
        vote_average: number,
        id: number,
        original_language: string,
        genres: { id: number, name: string }[],
        status: string
    ) {
        super(backdrop_path, first_air_date, 0, episode_run_time.length * episode_run_time.reduce((acc, el) => acc + el, 0), 0),
        this.backdrop_path = backdrop_path,
            this.created_by = created_by,
            this.first_air_date = first_air_date,
            this.homepage = homepage,
            this.episode_run_time = episode_run_time,
            this.languages = languages,
            this.last_episode_to_air = last_episode_to_air,
            this.name = name,
            this.networks = networks,
            this.number_of_episodes = number_of_episodes,
            this.number_of_seasons = number_of_seasons,
            this.origin_country = origin_country,
            this.original_name = original_name,
            this.overview = overview,
            this.poster_path = poster_path,
            this.production_companies = production_companies,
            this.seasons = seasons,
            this.vote_average = vote_average,
            this.id = id,
            this.original_language = original_language,
            this.genres = genres,
            this.status = status
    }

}

export class CreatedBy implements ICreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;

    constructor(
        id: number,
        credit_id: string,
        name: string,
        gender: number,
        profile_path: string,) {
        this.id = id,
            this.credit_id = credit_id,
            this.name = name,
            this.gender = gender,
            this.profile_path = profile_path
    }
};

export class LastEpisode implements IlastEpisodTV {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    ocerview: string;
    season_number: number;
    still_path: string;
    vote_average: number;

    constructor(
        air_date: string,
        episode_number: number,
        id: number,
        name: string,
        ocerview: string,
        season_number: number,
        still_path: string,
        vote_average: number,) {
        this.air_date = air_date,
            this.episode_number = episode_number,
            this.id = id,
            this.name = name,
            this.ocerview = ocerview,
            this.season_number = season_number,
            this.still_path = still_path,
            this.vote_average = vote_average
    }
};

export class Network implements INetworks {
    name: string;
    logo_path: string;

    constructor(name: string, logo_path: string) {
        this.name = name,
            this.logo_path = logo_path
    }
};

export class ProdationCompanyTV implements IProductionCompanyTV {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;

    constructor(
        id: number,
        logo_path: string,
        name: string,
        origin_country: string,
    ) {
        this.id = id,
            this.logo_path = logo_path,
            this.name = name,
            this.origin_country = origin_country
    }

};

export class Season implements ISeason {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;

    constructor(
        air_date: string,
        episode_count: number,
        id: number,
        name: string,
        overview: string,
        poster_path: string,
        season_number: number,
    ) {
        this.air_date = air_date,
            this.episode_count = episode_count,
            this.id = id,
            this.name = name,
            this.overview = overview,
            this.poster_path = poster_path,
            this.season_number = season_number
    }

};

export class RecommendationTV implements IRecommendationTV {
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