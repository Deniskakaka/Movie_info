import { Dispatch, Action } from 'redux';
import { IDetailMovie, IMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV, ITrailerTV, IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { requestTrailerMovie, requestTrailerTV, requestLinksMovie } from "Utils/requestFunction";
import { actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetailsTV } from "Redux/tvRedux/action";
import { fabricTrailer } from "Root/class/fabricClass";

export function createTrailerMovie(
    array: IMovie[],
    requestFunction: typeof requestTrailerMovie,
    action: any,
    dispatch: Dispatch<Action>) {
    array.map((el: IMovie) => {
        requestFunction(el.id).then((res: any) => {
            res.data.results.slice(0, 1).map((q: ITrailerMovie) =>
                dispatch(action(new fabricTrailer().returnTrailerMovie(
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
                dispatch(action(new fabricTrailer().returnTrailerTV(
                    q.name,
                    q.key,
                    q.published_at,
                    q.id,
                    el.original_title,
                    el.getPoster_path()))));
        })
    });
};

export function actionRequestDetails(
    dispatch: Dispatch<any>,
    action: typeof actionRequestDetailsMovie | typeof actionRequestDetailsTV,
    idRecommend?:number) {
    const id = +localStorage.getItem('id');
    dispatch(action(!idRecommend ? id : idRecommend));
};