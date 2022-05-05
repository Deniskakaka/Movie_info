import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { IMovie } from "Root/interfaces/interfaceClassMovie/interfaceMovie";
import Radium from 'radium';
import { ITV } from "Root/interfaces/interfaceClassMovie/interfaceTV";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionDetailsMovie, actionRequestDetailsMovie } from "Root/redux/movieRedux/action";
import { actionDetailsTV, actionRequestDetailsTV } from "Root/redux/tvRedux/action";
import { defaultValueDetailsMovie, defaultValueDetailsTV } from "Root/utils/defaultValues";

type Props = {
    listMovies: IMovie[] | ITV[],
    pathname: string
}

const Preview = (props: Props) => {
    const styles: Radium.StyleRules = {
        wrapper: {
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap'
        },
        item: {
            margin: '0 20px 20px 20px'
        }
    };
    const dispatch = useDispatch();

    const hashId = (id: number, poster: string) => {
        dispatch(actionDetailsMovie(defaultValueDetailsMovie));
        dispatch(actionDetailsTV(defaultValueDetailsTV));
        if (props.pathname.includes('movie')) dispatch(actionRequestDetailsMovie(id));
        if (props.pathname.includes('tv')) dispatch(actionRequestDetailsTV(id));
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('poster', poster);
    };

    return (<div style={styles.wrapper}>
        {
            props.listMovies.map(el => {
                return <Link to={props.pathname.includes('movie') ? `/movie_details/${el.id}` : `/tv_details/${el.id}`}>
                    <Card sx={{ maxWidth: 180, minWidth: 120 }} style={styles.item} onClick={() => hashId(el.id, el.getPoster_path())}>
                        <CardMedia
                            component="img"
                            alt="poster movie"
                            height="275"
                            image={el.getPoster_path()} />
                    </Card>
                </Link>
            })
        }
    </div>)
}

export default Preview;