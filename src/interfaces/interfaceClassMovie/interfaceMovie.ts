export interface IMovie {
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,

    getBackdrop_path(): string,
    getPoster_path(): string,
    getRelease_date(): string,
    getVote_average(): number, 
}