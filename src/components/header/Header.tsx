import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from "react-router-dom";
import Radium from 'radium';

import { IglobalReduser } from "Interfaces/globalInterfaces";
import ListMenu from "Components/ui/ListMenu";
import { switchActiveMenu } from "Redux/rootRedux/action";
import { border } from "@mui/system";

const Header = () => {
    const styles: Radium.StyleRules = {
        header: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#0971f1'
        },
        no_active: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'fit-content',
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '10px',
            cursor: 'pointer',
        },
        active: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'transparent',
            color: '#fff',
            borderRadius: '10px',
            border: '2px solid #00e069',
            cursor: 'pointer'
        },
        wrapper: {
            display: 'flex'
        }
    }
    const sectionsMovie = useSelector((state: IglobalReduser) => state.rootReduser.listMovieItem);
    const sectionsTV = useSelector((state: IglobalReduser) => state.rootReduser.listTVItem);
    const activeMenu = useSelector((state: IglobalReduser) => state.rootReduser.activeMenu);
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <header style={styles.header}>
            <div style={styles.wrapper}>
                <button
                    style={activeMenu !== 'Movie' ? styles.no_active : styles.active}
                    onClick={() => dispatch(switchActiveMenu("Movie"))}>
                    Movie
                </button>
                <button
                    style={activeMenu !== 'TV' ? styles.no_active : styles.active}
                    onClick={() => dispatch(switchActiveMenu("TV"))}>
                    TV
                </button>
                <button
                    style={activeMenu !== 'People' ? styles.no_active : styles.active}
                    onClick={() => dispatch(switchActiveMenu("People"))}>
                    People
                </button>
                <Link to={'/'} style={location.pathname !== '/' ? styles.no_active : styles.active}>
                    <HomeIcon />
                </Link>
            </div>
            {activeMenu === 'Movie' && <ListMenu list={sectionsMovie} />}
            {activeMenu === 'TV' && <ListMenu list={sectionsTV} />}
        </header>
    )
}

export default Header;