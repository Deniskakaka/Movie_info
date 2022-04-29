import { Dispatch, Action } from 'redux';
import DetailsTV, { CreatedBy, LastEpisode, Network, ProdationCompanyTV, Season } from 'Root/class/detailsClasses/detailsTV';
import TV from 'Root/class/previewClasses/tv';
import { IglobalReduser } from 'Root/interfaces/globalInterfaces';
import { ITV, ITrailerTV, IDetailTV } from 'Root/interfaces/interfaceClassMovie/interfaceTV';
import { ICreatedBy, INetworks, IProductionCompanyTV, ISeason } from 'Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces';
import { requestCastTV, requestDetailsTV } from 'Root/utils/requestFunction';
import { TVEnum, tvActionName } from "Root/utils/other";
import { DetailsFabric } from "Root/class/fabricClass";
import { ICast } from 'Root/interfaces/interfaceClassMovie/interfaceCast';
import { ConstructionOutlined } from '@mui/icons-material';
import { Cast } from 'Root/class/people/cast';

//action details TV
export const actionDetailsTV = (detils: IDetailTV) => {
    return {
        type: tvActionName.requestDetailsTV,
        payload: detils
    }
}

export const actionRequestDetailsTV = (id: number): (dispatch: Dispatch<Action>) => void => {
    return (dispatch: Dispatch<Action>) => {
        requestDetailsTV(id).then(res => {
            const result = new DetailsFabric().returnDetailsTV(
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
                res.data.vote_average,
                res.data.id,
                res.data.original_language,
                res.data.genres,
                res.data.status
            )
            dispatch(actionDetailsTV(result));
        })
    }
}

//action trailer TV
export const actionTrailerTV = (trailer: ITrailerTV) => {
    return {
        type: tvActionName.requestTrailer,
        payload: trailer
    }
};

export const actionBackgroundTrailerTV = (image: string) => {
    return {
        type: tvActionName.setBackgroundTrailer,
        payload: image
    }
};


export const actionSwitchKeyTrailerTV = (key: string) => {
    return {
        type: tvActionName.setKeyTrailer,
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
    name: TVEnum) => {
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
            if (name === TVEnum.popular && requestPopularList) 
                return dispatch(actionTVList(result, tvActionName.requestPopular));
            if (name === TVEnum.airing_today && requestAiringTodayList)
                return dispatch(actionTVList(result, tvActionName.requestAiringTodayTV));
            if (name === TVEnum.on_the_air && requestOnTheAirList)
                return dispatch(actionTVList(result, tvActionName.requestListOnTheAir));
            if (name === TVEnum.top_rated && requestTopRatedList)
                return dispatch(actionTVList(result, tvActionName.requestTopRated));
        })
    }
};

//cast TV

const actionCastTV = (cast: ICast) => {
    return {
        type: tvActionName.requestCastTV,
        payload: cast
    }
};

export const actionRequestCastTV = (id: number) => {
    return (dispatch: Dispatch<Action>): void => {
        requestCastTV(id).then(res => {
            const cast = res.data.cast.map((el: ICast) => {
                return new Cast(
                    el.id,
                    el.known_for_department,
                    el.name,
                    el.profile_path,
                    el.character)
            });
            const crew = res.data.crew.map((el: ICast) => {
                return new Cast(
                    el.id,
                    el.known_for_department,
                    el.name,
                    el.profile_path,
                    el.character)
            });
            dispatch(actionCastTV(cast.concat(crew)));
        });
    }
}