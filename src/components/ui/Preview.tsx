import React, { useMemo } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radium from 'radium';
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionDetailsMovie, actionRequestDetailsMovie } from "Root/redux/movieRedux/action";
import { actionDetailsTV, actionRequestDetailsTV } from "Root/redux/tvRedux/action";
import { defaultValueDetailsMovie, defaultValueDetailsTV } from "Root/utils/defaultValues";
import { PercentsPopulation } from "./ListPopularPreview";
import IFilterObject from "Root/interfaces/interfaceGlobalObject/IfiltersObject";
import TV from "Root/class/previewClasses/tv";
import { Movie } from "Root/class/previewClasses/movie";
import { filterList, sortList } from "Root/utils/componentsFunctions";

type Props = {
    listMovies: Movie[] | TV[],
    pathname: string,
    filter: IFilterObject,
    filtration: boolean,
    sort: string
}

const Preview = (props: Props) => {
    const styles: Radium.StyleRules = {
        wrapper: {
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap'
        },
        item: {
            position: 'relative',
            margin: '0 20px 20px 20px',
            minHeight: '420px',
            maxHeight: 'fit-content',
        }
    };
    const dispatch = useDispatch();
    const location = useLocation().pathname;

    const hashId = (id: number, poster: string) => {
        dispatch(actionDetailsMovie(defaultValueDetailsMovie));
        dispatch(actionDetailsTV(defaultValueDetailsTV));
        if (props.pathname.includes('movie')) dispatch(actionRequestDetailsMovie(id));
        if (props.pathname.includes('tv')) dispatch(actionRequestDetailsTV(id));
        localStorage.setItem('id', `${id}`);
        localStorage.setItem('poster', poster);
    };

    const returnList = useMemo(() => {
        return sortList(filterList(props.listMovies, props.filter), props.sort, props.sort.includes('A-Z') ?  'A-Z' : props.sort.includes('Z-A') ? 'Z-A' : '');
    }, [props.filter, props.listMovies, props.filtration, location, props.sort]);

    return (<div style={styles.wrapper}>
        {
            returnList.length < 1 ? <span>No items were found that match your query.</span> : returnList.map(el => {
                return <Link style={styles.item} key={el.id} to={props.pathname.includes('movie') ? `/movie_details/${el.id}` : `/tv_details/${el.id}`}>
                    <Card sx={{ maxWidth: 180, minWidth: 120 }} style={styles.item} onClick={() => hashId(el.id, el.getPoster_path())}>
                        <CardMedia
                            component="img"
                            alt="poster movie"
                            height="275"
                            image={el.getPoster_path()} />
                        <CardContent>
                            <Typography>
                                {el.original_title}
                            </Typography>
                            <Typography>
                                {el.getRelease_date()}
                            </Typography>
                            {
                                <PercentsPopulation persents={el.getVote_average()} />
                            }
                        </CardContent>
                    </Card>
                </Link>
            })
        }
    </div>)
}

export default Preview;