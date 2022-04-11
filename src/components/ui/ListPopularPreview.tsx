import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import { ITV } from "Interfaces/interfaceClassMovie/interfaceTV";
import SmoothList from 'react-smooth-list';

type Props = {
    popularMovie: IMovie[] | ITV[],
};

const ListStartPopular = (props: Props) => {

    const paintingRating = (rating: number) => {
        if (rating >= 7.5) return '#05f03c';
        if (rating < 7.5 && rating > 6) return '#dcf005';
        if (rating < 6 && rating > 4) return '#f07e05';
        if (rating <= 4) return '#f00505';
    }

    return (
        <SmoothList className="wrapper_popular">
            {
                props.popularMovie.map(el => {
                    return <Card className="popular">
                        <CardMedia
                            className="popular__item"
                            component="img"
                            height="225"
                            image={el.getPoster_path()} />
                        <CardContent className="content">
                            <Typography>
                                {el.original_title}
                            </Typography>
                            <Typography>
                                {el.getRelease_date()}
                            </Typography>
                            <div
                                className="popular__rating"
                                style={{ borderColor: `${paintingRating(el.getVote_average())}` }}
                            >
                                {`${el.getVote_average() * 10}`}
                                <span>%</span>
                            </div>
                        </CardContent>
                    </Card>
                })
            }
        </SmoothList>
    )
}

export default ListStartPopular;