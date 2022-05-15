import React from "react";
import SmoothList from 'react-smooth-list';
import { Link } from "react-router-dom";
import { IMovieMenu, ITVMenu } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";
import Radium from 'radium';
import { MovieMenu } from "Root/class/previewClasses/movie";
import { useDispatch } from "react-redux";
import { activeLoaderContent } from "Root/redux/rootRedux/action";

type Props = {
    list: IMovieMenu[] | ITVMenu[]
}

const ListMenu = (props: Props) => {
    const styles: Radium.StyleRules = {
        list_menu: {
            display: 'flex',
            marginTop: '20px'
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            padding: '5px',
            margin: '20px',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            border: '1px solid transparent',
            borderRadius: '10px',
            transition: 'all 0.3s ease',

            'hover': {
                borderColor: '#33e86f',
                transition: 'all 0.3s ease',
                backgroundColor: '#fff',
                color: '#0971f1'
            }
        },
        image: {
            width: '30px',
            height: '30px',
            marginRight: '5px'
        }
    };
    const dispatch = useDispatch();

    return (
        <SmoothList>
            <div style={styles.list_menu}>
                {props.list.map(el =>
                    <Link
                        onClick={() => dispatch(activeLoaderContent())}
                        to={el instanceof MovieMenu 
                            ? `/movie/${el.name.replace(' ', '_')}` 
                            : `/tv/${el.name.replace(' ', '_')}`}
                        style={styles.item}
                    >
                        {el.name}
                        <img style={styles.image} src={el.image} />
                    </Link>
                )}
            </div>
        </SmoothList>
    )
};

export default ListMenu;