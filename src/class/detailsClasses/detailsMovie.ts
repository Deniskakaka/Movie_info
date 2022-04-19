import { IDetailMovie } from "Interfaces/interfaceClassMovie/interfaceMovie";
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
        status: string
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

export class ProductionCompanyMovie implements IProductionCompany {
    id: number;
    name: string;
    logo_path: string;

    constructor(id: number, name: string, logo_path: string) {
        this.id = id,
        this.name = name,
        this.logo_path = logo_path
    }
}