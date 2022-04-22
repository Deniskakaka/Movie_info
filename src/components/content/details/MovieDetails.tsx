import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Rating } from 'semantic-ui-react';
import { actionRequestCastMovie, actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";
import DetailsHead from "./components/Details_head";
import ListCast from "./components/ListCast";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Acauntancy from "./components/Acauntancy";
import Media from "./components/Media";

const MovieDetails = () => {
    const [poster, setPoster] = useState<string>('');
    const location = useLocation();
    const detailsMovie = useSelector((state: IglobalReduser) => state.movieReduser.detailsMovie);
    const cast = useSelector((state: IglobalReduser) => state.movieReduser.cast);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('movie_details') && detailsMovie.id === 0)
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie,
                detailsMovie);
        setPoster(localStorage.getItem('poster'));
    }, [detailsMovie]);

    useEffect(() => {
        detailsMovie.id !== 0 && dispatch(actionRequestCastMovie(detailsMovie.id))
    }, [detailsMovie]);

    const renderDetailsHeader = useMemo(() => {
        return <DetailsHead cast={cast} details={detailsMovie} poster={poster} />
    }, [detailsMovie, poster, cast]);

    const renderListCast = useMemo(() => {
        return <ListCast cast={cast.filter((el: ICast) => el.profile_path !== null)} />
    }, [cast]);

    const renderAcauntancy = useMemo(() => {
        return <Acauntancy details={detailsMovie} />
    }, [detailsMovie]);

    const renderMedia = useMemo(() => {
        return <Media id={detailsMovie.id} nameMovie={detailsMovie.title}/>
    }, [detailsMovie]);

    return (
        <div>
            {renderDetailsHeader}
            <div className="further_information">
                {renderListCast}
                {renderAcauntancy}
            </div>
            {renderMedia}
        </div>
    )
};

export default MovieDetails;