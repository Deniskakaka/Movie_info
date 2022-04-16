export class BasicMethodsMovieAndTV {
    constructor (
        public backdrop_path: string, 
        public poster_path: string,
        public  release_date: string,
        public vote_average:number) {}
    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.backdrop_path}`;

    getPoster_path = () => `https://image.tmdb.org/t/p/original/${this.poster_path}`;

    getRelease_date = () => this.release_date.split('-').reverse().join('/');
    
    getVote_average = () => this.vote_average;
}