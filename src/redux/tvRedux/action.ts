import { Dispatch, Action } from 'redux';
import DetailsTV, { CreatedBy, LastEpisode, Network, ProdationCompanyTV, Season } from 'Root/class/detailsTV';
import TV from 'Root/class/tv';
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { ITV, ITrailerTV, IDetailTV } from 'Root/interfaces/interfaceClassMovie/interfaceTV';
import { ICreatedBy, INetworks, IProductionCompanyTV, ISeason } from 'Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces';
import { requestDetailsTV } from 'Root/utils/requestFunction';

//action details TV
export const actionDetailsTV = (detils: IDetailTV) => {
    return {
        type: 'REQUEST_DETAILS_TV',
        payload: detils
    }
}

export const actionRequestDetailsTV = (id: number): (dispatch: Dispatch<Action>) => void => {
    return (dispatch: Dispatch<Action>) => {
        requestDetailsTV(id).then(res => {
          const result =  new DetailsTV(
                res.data.backdrop_path,
                res.data.created_by.map((el: ICreatedBy) => new CreatedBy(
                    el.id,
                    el.credit_id,
                    el.name,
                    el.gender,
                    el.profile_path)),
                res.data.first_air_date,
                res.data.homepage,
                res.data.episode_run_time,
                res.data.languages,
                new LastEpisode(
                    res.data.last_episode_to_air.air_date,
                    res.data.last_episode_to_air.episode_number,
                    res.data.last_episode_to_air.id,
                    res.data.last_episode_to_air.name,
                    res.data.last_episode_to_air.ocerview,
                    res.data.last_episode_to_air.season_number,
                    res.data.last_episode_to_air.still_path,
                    res.data.last_episode_to_air.vote_average),
                res.data.name,
                res.data.networks.map((el: INetworks) => new Network(el.name, el.logo_path)),
                res.data.number_of_episodes,
                res.data.number_of_seasons,
                res.data.origin_country,
                res.data.original_name,
                res.data.overview,
                res.data.poster_path,
                res.data.production_companies.map((el: IProductionCompanyTV) => new ProdationCompanyTV(
                    el.id,
                    el.logo_path,
                    el.name,
                    el.origin_country
                )),
                res.data.seasons.map((el: ISeason) => new Season(
                    el.air_date,
                    el.episode_count,
                    el.id,
                    el.name,
                    el.overview,
                    el.poster_path,
                    el.season_number)),
                res.data.vote_average
            )
            dispatch(actionDetailsTV(result));
        })
    }
}

//action trailer TV
export const actionTrailerTV = (trailer: ITrailerTV) => {
    return {
        type: 'REQUEST_TRAILER_TV',
        payload: trailer
    }
};

export const actionSwitchKeyTrailerTV = (key: string) => {
    return {
        type: 'SWITCH_KEY_TRAILER_TV',
        payload: key
    }
};

//action list TV
const actionTVList = (listTV: ITV, type: string) => {
    return {
        type: type,
        payload: listTV,
    }
};

export const actionRequestTV = (
    count: number,
    requestFunc: (count: number) => Promise<any>,
    name: string) => {
    return (dispatch: Dispatch<Action>, getState: () => IglobalReduser): void => {
        const requestPopularList = getState().tvReduser.popular.length !== count * 20;
        const requestAiringTodayList = getState().tvReduser.airing_today.length !== count * 20;
        const requestOnTheAirList = getState().tvReduser.TV_on_the_air.length !== count * 20;
        const requestTopRatedList = getState().movieReduser.top_rated.length !== count * 20;

        requestFunc(count).then((res: any) => {
            const result = res.data.results.map((el: any) => new TV(
                el.poster_path,
                el.id,
                el.backdrop_path,
                el.vote_average,
                el.first_air_date,
                el.origin_country,
                el.original_language,
                el.name));
            if (name === 'popular' && requestPopularList) return dispatch(actionTVList(result, 'REQUEST_LIST_POPULAR_TV'));
            if (name === 'airing_today' && requestAiringTodayList) return dispatch(actionTVList(result, 'REQUEST_LIST_AIRING_TODAY_TV'));
            if (name === 'on_the_air' && requestOnTheAirList) return dispatch(actionTVList(result, 'REQUEST_LIST_ON_THE_AIR_TV'));
            if (name === 'top_rated' && requestTopRatedList) return dispatch(actionTVList(result, 'REQUEST_LIST_TOP_RATED_TV'));
        })
    }
};