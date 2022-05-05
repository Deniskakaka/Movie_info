import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { actionRecommendateMovies, actionRequestCastMovie, actionRequestDetailsMovie, actionRequestListRecommendateMovies } from "Redux/movieRedux/action";
import { actionRecommendationTV, actionRequestCastTV, actionRequestDetailsTV, actionRequestRecommendationTV } from "Redux/tvRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";
import DetailsHead from "./components/DetailsHead";
import ListCast from "./components/ListCast";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Acauntancy from "./components/Acauntancy";
import Media from "./components/Media";
import Recommendate from "./components/Recommendate";
import Radium from 'radium';
import { activeLoaderContent, switchActiveMenu, disableLoaderContent } from "Root/redux/rootRedux/action";

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
    const recommendateMovies = useSelector((state: IglobalReduser) => state.movieReduser.recommendationMovies);
    const recommendateTV = useSelector((state: IglobalReduser) => state.tvReduser.recommendatesTV);
    const loader = useSelector((state: IglobalReduser) => state.rootReduser.contentLoader);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('movie_details') && detailsMovie.id === 0) {
            dispatch(activeLoaderContent());
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie);
            setTimeout(() => dispatch(disableLoaderContent()), 1300);
            dispatch(switchActiveMenu('Movie'));
        }
        if (location.pathname.includes('tv_details') && detailsTV.id === 0) {
            dispatch(activeLoaderContent());
            actionRequestDetails(
                dispatch,
                actionRequestDetailsTV);
            setTimeout(() => dispatch(disableLoaderContent()), 1300);
        }
    }, [detailsMovie, detailsTV]);


    useEffect(() => {
        if (detailsMovie.id !== 0) {
            dispatch(actionRequestCastMovie(+localStorage.getItem('id')));
            dispatch(actionRequestListRecommendateMovies(detailsMovie.id, 1));
            dispatch(actionRecommendationTV([]));
            setTimeout(() => dispatch(disableLoaderContent()), 1300);
        }
        if (detailsTV.id !== 0) {
            dispatch(actionRequestCastTV(+localStorage.getItem('id')));
            dispatch(actionRequestRecommendationTV(detailsTV.id, 1));
            dispatch(actionRecommendateMovies([]));
            setTimeout(() => dispatch(disableLoaderContent()), 1300);
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

    const renderRecommendate = useMemo(() => {
        if (recommendateMovies.length > 0) return <Recommendate list={recommendateMovies} />
        if (recommendateTV.length > 0) return <Recommendate list={recommendateTV} />
    }, [recommendateMovies, recommendateTV]);

    return (
        <div>
            {
                loader ? <Box style={styles.loader}><CircularProgress /></Box> : <div>
                    {renderDetailsHeader}
                    <div style={styles.further_information}>
                        {renderListCast}
                        {renderAcauntancy}
                    </div>
                    {renderMedia}
                    {renderRecommendate}
                </div>
            }
        </div>
    )
};

export default Details;

