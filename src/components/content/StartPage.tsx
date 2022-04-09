import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { actionRequestMovie } from "Redux/movieRedux/action";
import ListStartPopular from "Components/ui/ListStartPopular";
import { IglobalReduser } from "Interfaces/globalInterfaces";
import { popularMovieRequest } from "Utils/requestFunction";
import { switchListStartPage } from "Redux/rootRedux/action";

const Movie = () => {
    const popularMovies = useSelector((state: IglobalReduser) => state.movieReduser.popular);
    const activeList = useSelector((state: IglobalReduser) => state.rootReduser.activeListStartPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionRequestMovie(1, popularMovieRequest, 'popular'));
    }, []);

    const handleChange = (event: any) => {
        dispatch(switchListStartPage(event.target.value));
    };

    return (
        <section>
            <div className="what_popular">
                <div className="what_popular__switcher">
                    <h3 className="what_popular__title">What's Popular</h3>
                    <ToggleButtonGroup
                        color="primary"
                        exclusive
                        value={activeList}
                        size="small"
                        className="what_popular__switcher__group_item"
                        onChange={(event) => handleChange(event)}
                    >
                        <ToggleButton value="theater" className="what_popular__switcher__item">in Theaters</ToggleButton>
                        <ToggleButton value="TV" className="what_popular__switcher__item">On TV</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <ListStartPopular popularMovie={popularMovies} />
            </div>
        </section>
    )
};

export default Movie;