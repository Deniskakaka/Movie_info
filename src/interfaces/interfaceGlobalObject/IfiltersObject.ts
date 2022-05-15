
interface IFilterObject {
    sort: string,
    genres: string[],
    sertification: string[],
    language: string,
    vote: number[] | number,
    runtime: number[]
};

export default IFilterObject