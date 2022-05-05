import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { ITVMenu } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import { BasicMethodsMovieAndTV } from "../basicMethods";

class TV extends BasicMethodsMovieAndTV implements ITV {
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
        super(backdrop_path, poster_path, first_air_date, vote_average);
        this.poster_path = poster_path,
            this.id = id,
            this.backdrop_path = backdrop_path,
            this.vote_average = vote_average,
            this.first_air_date = first_air_date,
            this.origin_country = origin_country,
            this.original_language = original_language,
            this.original_title = original_title
    }
};

export default TV;

export class MenuTV implements ITVMenu {
    key: string;
    name: string;
    image: string;

    constructor(key: string, name: string, image: string) {
        this.key = key,
        this.name = name,
        this.image = image
    }
}