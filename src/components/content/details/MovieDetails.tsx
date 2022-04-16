import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IglobalReduser } from "Root/interfaces/globalInterfaces";
import { Image } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';
import { actionRequestDetailsMovie } from "Redux/movieRedux/action";
import { actionRequestDetails } from "Root/utils/componentsFunctions";

const MovieDetails = () => {
    const location = useLocation();
    const detailsMovie = useSelector((state: IglobalReduser) => state.movieReduser.detailsMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('movie_details'))
            actionRequestDetails(
                dispatch,
                actionRequestDetailsMovie,
                detailsMovie);
    }, [detailsMovie]);
    return (
        <div>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' disabled />
        </div>
    )
};

export default MovieDetails;