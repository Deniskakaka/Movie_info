import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { IMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";

type Props = {
    listMovies: IMovie[],
}

const Preview = (props: Props) => {

    return (<div className="preview">
        {
            props.listMovies.map(el => {
                return <Card sx={{ maxWidth: 180, minWidth: 120 }} className="preview__item">
                    <CardMedia
                        component="img"
                        alt="poster movie"
                        height="275"
                        image={el.getPoster_path()} />
                </Card>
            })
        }
    </div>)
}

export default Preview;