import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SmoothList from 'react-smooth-list';
import Radium from 'radium';
import CircularProgress from '@mui/material/CircularProgress';

import Trailer from "Components/content/trailers/Trailer";
import ListPopularPreview from "Components/ui/ListPopularPreview";
import TrailerPreview from "Components/content/trailers/TrailersPreview";

import { actionBackgroundTrailer, actionRequestMovie, actionTrailer, actionRequestDetailsMovie, actionDetailsMovie, actionRequestListRecommendateMovies } from "Redux/movieRedux/action";
import { actionTrailerTV, actionRequestDetailsTV, actionRequestTV, actionBackgroundTrailerTV, actionRequestRecommendationTV } from "Redux/tvRedux/action";
import { activeLoaderContent, disableLoaderContent, switchActiveMenu, switchListStartPage, switchListTrailer } from "Redux/rootRedux/action";
import { IglobalReduser } from "Interfaces/globalInterfaces";
import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { createTrailerMovie, createTrailerTV } from "Root/utils/componentsFunctions";
import { TVEnum, MovieEnum } from "Root/utils/other";
import { popularMovieRequest, popularTVRequest, requestTrailerMovie, requestTrailerTV } from "Utils/requestFunction";
import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { defaultValueDetailsMovie } from "Root/utils/defaultValues";

const Movie = () => {
    const activeTrailerList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartTrailer);
    const backgroundMovie = useSelector((state: IglobalReduser) => state.movieReduser.backgroundTrailer);
    const backgroundTV = useSelector((state: IglobalReduser) => state.tvReduser.backgroundTrailer);
    const popularMovies = useSelector((state: IglobalReduser) => state.movieReduser.popular);
    const popularTV = useSelector((state: IglobalReduser) => state.tvReduser.popular);
    const activeList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartPage);
    const trailersMovie = useSelector((state: IglobalReduser) => state.movieReduser.trailerMovie);
    const trailersTV = useSelector((state: IglobalReduser) => state.tvReduser.trailerTV);
    const loader = useSelector((state: IglobalReduser) => state.rootReduser.contentLoader);

    const renderBackgroundTrailers = useMemo(() => {
        if (activeTrailerList === 'theater' && backgroundMovie) return backgroundMovie;
        if (activeTrailerList === 'TV' && backgroundTV) return backgroundTV;
    }, [activeTrailerList, backgroundMovie, backgroundTV]);

    const styles: Radium.StyleRules = {
        start_page: {
            paddingBottom: '50px'
        },
        what_popular: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '10px',
            width: '85%',
            margin: '0 auto'
        },
        switcher: {
            display: 'flex',
            alignItems: 'center'
        },
        popular_title: {
            marginLeft: '10px',
            marginRight: '20px',
            fontFamily: 'sans - serif',
            paddingTop: '10px',
            fontWeight: '900'
        },
        switcher__group: {},
        switcher__item: {
            height: '30px !important'
        },
        trailers: {
            display: 'flex',
            maxWidth: '100%',
            overflow: 'auto',
            position: 'relative',
            flexDirection: 'row',
            width: '85%',
            margin: '40px auto',
            padding: '90px 50px',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundImage: `url(${renderBackgroundTrailers})`
        },
        trailer__switcher: {
            display: 'flex',
            position: 'absolute',
            top: '10px',
            left: '60px',
            backgroundColor: '#fff',
            borderRadius: '10px'
        },
        trailers__title: {
            color: '#222',
            paddingTop: '5px',
            marginBottom: '0',
            marginRight: '15px',
            marginLeft: '10px'
        },
        flex: {
            display: 'flex'
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionDetailsMovie(defaultValueDetailsMovie));
        dispatch(actionRequestListRecommendateMovies(0, 0));
        dispatch(actionRequestRecommendationTV(0, 0));
    }, [])

    useEffect(() => {
        popularMovies.length < 1
            && dispatch(actionRequestMovie(1, popularMovieRequest, MovieEnum.popular));
        dispatch(switchActiveMenu(''));
    }, [popularMovies]);

    useEffect(() => {
        popularTV.length < 1
            && dispatch(actionRequestTV(1, popularTVRequest, TVEnum.popular));
    }, [popularTV])

    useEffect(() => {
        !!trailersMovie.length && dispatch(actionBackgroundTrailer(trailersMovie[0].poster));
        !!trailersTV.length && dispatch(actionBackgroundTrailerTV(trailersTV[0].poster));
        trailersMovie.length < 1
            && createTrailerMovie(popularMovies, requestTrailerMovie, actionTrailer, dispatch);
    }, [trailersMovie, trailersTV]);

    useEffect(() => {
        trailersTV.length < 1 && createTrailerTV(popularTV, requestTrailerTV, actionTrailerTV, dispatch);
    }, [popularTV, trailersTV]);

    useEffect(() => {
        if (trailersMovie.length < 1 && trailersTV.length < 1) dispatch(activeLoaderContent());
        else setTimeout(() => dispatch(disableLoaderContent()), 1300);
    }, [trailersMovie, trailersTV]);

    const handleChange = (event: any, action: any) => {
        dispatch(action(event.target.value));
    };

    return (
        <section style={styles.start_page}>
            {
                loader
                    ? <div style={styles.loader}>
                        <CircularProgress />
                    </div>
                    : <>
                        <div style={styles.what_popular}>
                            <div style={styles.switcher}>
                                <h3 style={styles.popular_title}>What's Popular</h3>
                                <ToggleButtonGroup
                                    color="primary"
                                    exclusive
                                    value={activeList}
                                    size="small"
                                    style={styles.switcher__group}
                                    onChange={(event) => handleChange(event, switchListStartPage)}
                                >
                                    <ToggleButton value="theater" style={styles.switcher__item}>in Theaters</ToggleButton>
                                    <ToggleButton value="TV" style={styles.switcher__item}>On TV</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            {activeList === 'theater'
                                && <ListPopularPreview popularMovie={popularMovies} action={actionRequestDetailsMovie} />}
                            {activeList === 'TV'
                                && <ListPopularPreview popularMovie={popularTV} action={actionRequestDetailsTV} />}
                        </div>
                        <div style={styles.trailers}>
                            <div style={styles.trailer__switcher}>
                                <h3 style={styles.trailers__title}>Latest Trailers</h3>
                                <ToggleButtonGroup
                                    color="primary"
                                    exclusive
                                    value={activeTrailerList}
                                    size="small"
                                    style={styles.trailer__buttons}
                                    onChange={(event) => handleChange(event, switchListTrailer)}
                                >
                                    <ToggleButton value="theater">in Theaters</ToggleButton>
                                    <ToggleButton value="TV">On TV</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            {activeTrailerList === 'theater'
                                && <SmoothList>
                                    <div style={styles.flex}>
                                        {trailersMovie.map((el: ITrailerMovie, index: number) =>
                                            <TrailerPreview key={index} trailer={el} activeTrailerList={activeTrailerList} />)}
                                    </div>
                                </SmoothList>}
                            {activeTrailerList === 'TV'
                                && <SmoothList className="flex">
                                    <div style={styles.flex}>
                                        {trailersTV.map((el: ITrailerTV, index: number) =>
                                            <TrailerPreview key={index} trailer={el} activeTrailerList={activeTrailerList} />)}
                                    </div>
                                </SmoothList>}
                        </div>
                    </>
            }
            <Trailer activeTrailerList={activeTrailerList} />
        </section>
    )
};

export default Movie;