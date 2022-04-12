import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SmoothList from 'react-smooth-list';

import Trailer from "Components/ui/Trailer";
import ListPopularPreview from "Components/ui/ListPopularPreview";
import TrailerPreview from "Components/ui/TrailersPreview";

import { actionBackgroundTrailer, actionRequestMovie, actionTrailer } from "Redux/movieRedux/action";
import { actionTrailerTV } from "Redux/tvRedux/action";
import { actionRequestTV } from "Redux/tvRedux/action";
import { switchListStartPage, switchListTrailer } from "Redux/rootRedux/action";
import { IglobalReduser } from "Interfaces/globalInterfaces";
import { ITrailerMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { createTrailerMovie, createTrailerTV } from "Root/utils/componentsFunctions";

import { popularMovieRequest, popularTVRequest, requestTrailerMovie, requestTrailerTV } from "Utils/requestFunction";
import { ITrailerTV } from "Root/interfaces/interfaceClassMovie/interfaceTV";

const Movie = () => {
    const popularMovies = useSelector((state: IglobalReduser) => state.movieReduser.popular);
    const popularTV = useSelector((state: IglobalReduser) => state.tvReduser.popular);
    const activeList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartPage);
    const activeTrailerList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartTrailer);
    const trailersMovie = useSelector((state: IglobalReduser) => state.movieReduser.trailerMovie);
    const trailerTV = useSelector((state: IglobalReduser) => state.tvReduser.trailerTV);
    const background = useSelector((state: IglobalReduser) => state.movieReduser.backgroundTrailer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionRequestMovie(1, popularMovieRequest, 'popular'));
        dispatch(actionRequestTV(1, popularTVRequest, 'popular'));
    }, []);

    useEffect(() => {
        if (trailersMovie.length > 0) dispatch(actionBackgroundTrailer(trailersMovie[0].poster));
    }, [trailersMovie]);

    useEffect(() => {
        createTrailerMovie(popularMovies, requestTrailerMovie, actionTrailer, dispatch);
    }, [popularMovies]);

    useEffect(() => {
        createTrailerTV(popularTV, requestTrailerTV, actionTrailerTV, dispatch);
    }, [popularTV]);

    const handleChange = (event: any, action: any) => {
        dispatch(action(event.target.value));
    };
    
    return (
        <section className="start_page">
            <div className="what_popular">
                <div className="what_popular__switcher">
                    <h3 className="what_popular__title">What's Popular</h3>
                    <ToggleButtonGroup
                        color="primary"
                        exclusive
                        value={activeList}
                        size="small"
                        className="what_popular__switcher__group_item"
                        onChange={(event) => handleChange(event, switchListStartPage)}
                    >
                        <ToggleButton value="theater" className="what_popular__switcher__item">in Theaters</ToggleButton>
                        <ToggleButton value="TV" className="what_popular__switcher__item">On TV</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {activeList === 'theater' && <ListPopularPreview popularMovie={popularMovies} />}
                {activeList === 'TV' && <ListPopularPreview popularMovie={popularTV} />}
            </div>
            <div className="trailers_wrapper" style={{ backgroundImage: `url(${background})` }}>
                <div className="trailers_wrapper__switcher">
                    <h3 className="trailers_wrapper__title">Latest Trailers</h3>
                    <ToggleButtonGroup
                        color="primary"
                        exclusive
                        value={activeTrailerList}
                        size="small"
                        className="trailer_wrapper__buttons"
                        onChange={(event) => handleChange(event, switchListTrailer)}
                    >
                        <ToggleButton value="theater">in Theaters</ToggleButton>
                        <ToggleButton value="TV">On TV</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {activeTrailerList === 'theater' && <SmoothList className="flex">{trailersMovie.map((el: ITrailerMovie) => <TrailerPreview trailer={el} activeTrailerList={activeTrailerList}/>)}</SmoothList>}
                {activeTrailerList === 'TV' && <SmoothList className="flex">{trailerTV.map((el: ITrailerTV) => <TrailerPreview trailer={el} activeTrailerList={activeTrailerList}/>)}</SmoothList>}
            </div>
            <Trailer activeTrailerList={activeTrailerList} />
        </section>
    )
};

export default Movie;