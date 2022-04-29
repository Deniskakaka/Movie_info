import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Rating } from 'semantic-ui-react';
import { actionRequestCastMovie, actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestCastTV, actionRequestDetailsTV } from "Redux/tvRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";
import DetailsHead from "./components/DetailsHead";
import ListCast from "./components/ListCast";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Acauntancy from "./components/Acauntancy";
import Media from "./components/Media";
import Radium from 'radium';
import { activeLoaderMovie, disableLoaderMovie, switchActiveMenu } from "Root/redux/rootRedux/action";
import CircularProgress from '@mui/material/CircularProgress';
import DetailsMovie from "Root/class/detailsClasses/detailsMovie";

const Details = () => {
    const styles: Radium.StyleRules = {
        further_information: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1350px',
            margin: '0 auto'
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        },
    }
    const location = useLocation();
    const detailsMovie = useSelector((state: IglobalReduser) => state.movieReduser.detailsMovie);
    const detailsTV = useSelector((state: IglobalReduser) => state.tvReduser.detailsTV);
    const castMovie = useSelector((state: IglobalReduser) => state.movieReduser.cast);
    const castTV = useSelector((state: IglobalReduser) => state.tvReduser.cast);
    const loader = useSelector((state: IglobalReduser) => state.rootReduser.movieLoader);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('movie_details') && detailsMovie.id === 0) {
            dispatch(activeLoaderMovie());
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie,
                detailsMovie);
            dispatch(switchActiveMenu('Movie'));
        }
        if (location.pathname.includes('tv_details') && detailsTV.id === 0) {
            actionRequestDetails(
                dispatch,
                actionRequestDetailsTV,
                detailsTV
            );
        }
    }, [detailsMovie, detailsTV]);


    useEffect(() => {
        if (detailsMovie.id !== 0) {
            setTimeout(() => dispatch(disableLoaderMovie()), 1300);
            dispatch(actionRequestCastMovie(detailsMovie.id));
        }
        if (detailsTV.id !== 0) {
            dispatch(actionRequestCastTV(detailsTV.id));
        }
    }, [detailsMovie, detailsTV]);

    const renderDetailsHeader = useMemo(() => {
        if (detailsMovie.id !== 0) return <DetailsHead cast={castMovie} details={detailsMovie} poster={localStorage.getItem('poster')} />
        if (detailsTV.id !== 0) return <DetailsHead cast={castTV} details={detailsTV} poster={localStorage.getItem('poster')} />
    }, [detailsMovie, castMovie, castTV, detailsTV]);

    const renderListCast = useMemo(() => {
        if (detailsMovie.id !== 0) return <ListCast cast={castMovie.slice(0, 10).filter((el: ICast) => el.profile_path !== null)} />
        if (detailsTV.id !== 0) return <ListCast cast={castTV.slice(0, 10).filter((el: ICast) => el.profile_path !== null)} />
    }, [castMovie, castTV]);

    const renderAcauntancy = useMemo(() => {
        if (detailsMovie.id !== 0) return <Acauntancy details={detailsMovie} />
        if (detailsTV.id !== 0) return <Acauntancy details={detailsTV} />
    }, [detailsMovie, detailsTV]);

    const renderMedia = useMemo(() => {
        if (detailsMovie.id !== 0) return <Media id={detailsMovie.id} nameMovie={detailsMovie.title} nameTrailerList={'theater'} />
        if (detailsTV.id !== 0) return <Media id={detailsTV.id} nameMovie={detailsTV.name} nameTrailerList={'TV'} />
    }, [detailsMovie, detailsTV]);

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
