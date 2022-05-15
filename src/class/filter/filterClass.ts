import IFilterObject from "Root/interfaces/interfaceGlobalObject/IfiltersObject";

class FilterList implements IFilterObject {
    sort: string;
    genres: string[];
    sertification: string[];
    language: string;
    vote: number[] | number;
    runtime: number[]

    constructor(
        sort: string,
        genres: string[],
        sertification: string[],
        language: string,
        vote: number[] | number,
        runtime: number[]
    ) {
        this.sort = sort,
        this.genres = genres,
        this.sertification = sertification,
        this.language = language,
        this.vote = vote,
        this.runtime = runtime
    }
};

export default FilterList;