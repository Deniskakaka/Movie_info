export class BasicMethodsMovieAndTV {
    constructor(
        public backdrop_path: string,
        public poster_path: string,
        public release_date: string,
        public vote_average: number) { }
    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.backdrop_path}`;

    getPoster_path = () => `https://image.tmdb.org/t/p/original/${this.poster_path}`;

    getRelease_date = () => this.release_date.split('-').reverse().join('/');

    getVote_average = () => this.vote_average;
};

export class BasicMethodDetailsMovieAndTV {

    constructor(
        public backdrop_path: string,
        public release_date: string,
        public revenue: number,
        public runtime: number,
        public budget: number) { }

    getBackdrop_path = () => `https://image.tmdb.org/t/p/original/${this.backdrop_path}`;

    getRelease_date = () => this.release_date.split('-').reverse().join('/');

    getRevenue = (type: string, currency: string) => this.revenue === 0 ? 'unknown'
        : new Intl.NumberFormat(type, { style: 'currency', currency: currency }).format(this.revenue);

    getRunTime = () => `${Math.trunc(this.runtime / 60)}h ${this.runtime % 60}m`;

    getBudget = (type: string, currency: string) => this.budget === 0 ? 'unknown'
        : new Intl.NumberFormat(type, { style: 'currency', currency: currency }).format(this.budget);
}