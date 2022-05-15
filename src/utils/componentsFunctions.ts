import { Dispatch, Action } from 'redux';
import { IDetailMovie, IMovie, ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV, ITrailerTV, IDetailTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { requestTrailerMovie, requestTrailerTV, requestLinksMovie } from "Utils/requestFunction";
import { actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetailsTV } from "Redux/tvRedux/action";
import { fabricTrailer } from "Root/class/fabricClass";
import TV from 'Root/class/previewClasses/tv';
import { Movie } from 'Root/class/previewClasses/movie';
import IFilterObject from 'Root/interfaces/interfaceGlobalObject/IfiltersObject';
import { Language } from 'Root/class/languageClass/language';

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
    idRecommend?: number) {
    const id = +localStorage.getItem('id');
    dispatch(action(!idRecommend ? id : idRecommend));
};

// filter list movie or tv
const returnResult = (array: TV[] | Movie[]) => {
    if (array.length < 1) return [];
    else return array;
}

const filterByCertification = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result = array instanceof TV ? array.filter((el: TV) =>
        el.certification.some((q: any) =>
            filter.sertification.includes(q.rating)))
        : array.filter((el: Movie) => filter.sertification.some((q: any) => el.certification.includes(q)));
    return (returnResult(result));
};

const filterByLanguage = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result = array.filter((el: TV) =>
        el.original_language === filter.language);
    return (returnResult(result));
};

const filterByGenres = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result = array.filter((el: TV) =>
        el.genres.some((q: any) =>
            filter.genres.includes(q)));
    return (returnResult(result));
};

const filterByVotes = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result = array.filter((el: TV) => el.vote_average <= filter.vote);
    return (returnResult(result));
};

const filterByRuntime = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result = array.filter((el: TV | Movie) =>
        el.runtime.reduce((acc: number, el: number) => acc + el, 0) / el.runtime.length
        <=
        filter.runtime.reduce((acc: number, el: number) => acc + el, 0) / filter.runtime.length)
    return (returnResult(result));
}

export const filterList = (array: TV[] | Movie[], filter: IFilterObject): TV[] | Movie[] => {
    let result: TV[] | Movie[] = array;
    if (filter.sertification.length > 0) result = filterByCertification(result, filter);
    if (filter.language) result = filterByLanguage(result, filter);
    if (filter.genres.length > 0) result = filterByGenres(result, filter);
    if (filter.vote !== 0) result = filterByVotes(result, filter);
    if (filter.runtime.some((el: number) => el !== 0)) result = filterByRuntime(result, filter);
    return result;
};

export const sortList = (array: Movie[] | TV[], property: string, type?: string) => {
    array.sort(function (a: any, b: any) {
        if (a[property] < b[property]) { return -1; }
        if (a[property] > b[property]) { return 1; }
        return 0;
    });
    if (type) {
        array.sort((a: any, b: any) => {
            if (type === 'A-Z') {
                if (a.original_title < b.original_title) { return -1; }
                if (a.original_title > b.original_title) { return 1; }
            }
            else if (type === 'Z-A') {
                if (b.original_title < a.original_title) { return -1; }
                if (b.original_title > a.original_title) { return 1; }
            }
        });
    }
    return array;
}