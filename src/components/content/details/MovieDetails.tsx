import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Image } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';
import { actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetailsTV } from "Redux/tvRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";

const MovieDetails = () => {
    const location = useLocation();
    const detailsMovie = useSelector((state: IglobalReduser) => state.movieReduser.detailsMovie);
    const detailsTV = useSelector((state: IglobalReduser) => state.tvReduser.detailsTV);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.slice(1) === 'movie_details')
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie,
                detailsMovie);
        if (location.pathname.slice(1) === 'tv_details')
            actionRequestDetails(
                dispatch,
                actionRequestDetailsTV,
                detailsTV);
    }, [detailsMovie, detailsTV]);

    return (
        <div>
            <div>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' disabled />
                <div>
                    <h1></h1>
                    <p>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <div>
                        <Rating icon='star' defaultRating={3} maxRating={4} />
                        <button>Play Trailer</button>
                    </div>
                    <span></span>
                    <h3>Overview</h3>
                    <div>
                        <p>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;