//Movie
export interface IMenu {
    key: string,
    name: string,
};

export interface IMovieMenu {
    key: string,
    name: string,
    image: string
};


export interface ITVMenu {
    key: string,
    name: string,
    image: string
};

export interface IProductionCompany {
    id: number, 
    name: string, 
    logo_path: string
};

//TV
export interface ICreatedBy {
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string,
};

export interface IlastEpisodTV {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    ocerview: string,
    season_number: number,
    still_path: string,
    vote_average: number
};

export interface IProductionCompanyTV {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
};

export interface ISeason {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
}

export interface INetworks {
    name: string, 
    logo_path: string
}