import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

type Props = {
    cast: ICast[]
}

const ListCast = (props: Props) => {
    return (
        <div className="cast">
            {
                props.cast.map((el: ICast, index: number) => {
                    return <Card className="cast__item" sx={{ minWidth: 140 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
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
                        </CardContent>
                    </Card>
                })
            }
        </div>
    )
};

export default ListCast;
