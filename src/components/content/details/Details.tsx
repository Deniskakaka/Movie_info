import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Rating } from 'semantic-ui-react';
import { actionRequestCastMovie, actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetailsTV } from "Redux/tvRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";
import DetailsHead from "./components/DetailsHead";
import ListCast from "./components/ListCast";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Acauntancy from "./components/Acauntancy";
import Media from "./components/Media";
import Radium from 'radium';
import { switchActiveMenu } from "Root/redux/rootRedux/action";

const Details = () => {
    const styles: Radium.StyleRules = {
        further_information: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1350px',
            margin: '0 auto'
        }
    }
    const [poster, setPoster] = useState<string>('');
    const location = useLocation();
    const detailsMovie = useSelector((state: IglobalReduser) => state.movieReduser.detailsMovie);
    const detailsTV = useSelector((state: IglobalReduser) => state.tvReduser.detailsTV);
    const cast = useSelector((state: IglobalReduser) => state.movieReduser.cast);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('movie_details') && detailsMovie.id === 0)
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie,
                detailsMovie);
        setPoster(localStorage.getItem('poster'));
        dispatch(switchActiveMenu('Movie'));
    }, [detailsMovie]);

    useEffect(() => {
        actionRequestDetails(
            dispatch,
            actionRequestDetailsTV,
            detailsTV
        );
    } , [])

    useEffect(() => {
        detailsMovie.id !== 0 && dispatch(actionRequestCastMovie(detailsMovie.id))
    }, [detailsMovie]);

    const renderDetailsHeader = useMemo(() => {
        return <DetailsHead cast={cast} details={detailsMovie} poster={poster} />
    }, [detailsMovie, poster, cast]);

    const renderListCast = useMemo(() => {
        return <ListCast cast={cast.slice(0, 10).filter((el: ICast) => el.profile_path !== null)} />
    }, [cast]);

    const renderAcauntancy = useMemo(() => {
        return <Acauntancy details={detailsMovie} />
    }, [detailsMovie]);

    const renderMedia = useMemo(() => {
        return <Media id={detailsMovie.id} nameMovie={detailsMovie.title} nameTrailerList={'theater'}/>
    }, [detailsMovie]);

    return (
        <div>
            {renderDetailsHeader}
            <div style={styles.further_information}>
                {renderListCast}
                {renderAcauntancy}
            </div>
            {renderMedia}
        </div>
    )
};

export default Details;