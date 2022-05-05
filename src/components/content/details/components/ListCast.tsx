import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Radium from 'radium';

type Props = {
    cast: ICast[]
}

const ListCast = (props: Props) => {
    const styles: Radium.StyleRules = {
        cast: {
            display: 'flex',
            height: '400px',
            maxWidth: '950px',
            overflow: 'auto'
        },
        item: {
            height: '350px',
            margin: '10px',
            marginLeft: '0',
        }
    }

    return (
        <div style={styles.cast}>
            {
                props.cast.map((el: ICast, index: number) => {
                    return <Card style={styles.item} key={index} sx={{ minWidth: 140 }}>
                        <CardMedia
                            component="img"
                            alt="cast"
                            height="195"
                            image={`${el.getBackdrop_path()}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="span">
                                {el.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {el.character}
                            </Typography>
                            <Typography>
                                {el.roles !== undefined
                                    && `${el.roles.reduce((acc: number, el) => acc + el.episode_count, 0)} episodes`}
                            </Typography>
                        </CardContent>
                    </Card>
                })
            }
        </div>
    )
};

export default ListCast;
