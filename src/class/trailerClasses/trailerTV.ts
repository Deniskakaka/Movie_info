import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

class TrailerTV implements ITrailerTV {
    name: string;
    key: string;
    published_at: string;
    id: string;
    nameMovie: string;
    poster: string;

    constructor(
        name: string,
        key: string,
        published_at: string,
        id: string,
        nameMovie: string,
        poster: string) {
        this.name = name,
            this.key = key,
            this.published_at = published_at,
            this.id = id,
            this.nameMovie = nameMovie,
            this.poster = poster
    }
};

export default TrailerTV;