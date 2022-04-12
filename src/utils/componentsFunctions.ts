import TrailerMovie, { TrailerTV } from "Root/class/trailer";
import { Dispatch, Action } from 'redux';
import { IMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV, ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { requestTrailerMovie, requestTrailerTV } from "Utils/requestFunction";

export function createTrailerMovie(
    array: IMovie[],
    requestFunction: typeof requestTrailerMovie,
    action: any,
    dispatch: Dispatch<Action>) {
    array.map((el: IMovie) => {
        requestFunction(el.id).then((res: any) => {
            res.data.results.slice(0, 1).map((q: ITrailerMovie) =>
                dispatch(action(new TrailerMovie(
                    q.name,
                    q.key,
                    q.published_at,
                    q.id,
                    el.original_title,
                    el.getPoster_path()))));
        })
    });
};

export function createTrailerTV(
    array: ITV[],
    requestFunction: typeof requestTrailerTV,
    action: any,
    dispatch: Dispatch<Action>) {
    array.map((el: ITV) => {
        requestFunction(el.id).then((res: any) => {
            res.data.results.slice(0, 1).map((q: ITrailerTV) =>
                dispatch(action(new TrailerTV(
                    q.name,
                    q.key,
                    q.published_at,
                    q.id,
                    el.original_title,
                    el.getPoster_path()))));
        })
    });
};

export function returnNameTrailer (array: ITrailerMovie[] | ITrailerTV[], key: string) {
    if (array.length > 0 && key !== '') {
        return array.filter((el: ITrailerMovie | ITrailerTV) => el.key === key)[0].nameMovie;
    }
}