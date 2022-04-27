import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
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
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '10px',
            cursor: 'pointer'
        },
        active: {
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: 'transparent',
            color: '#fff',
            borderRadius: '10px',
            border: '2px solid #00e069',
            cursor: 'pointer'
        }
    }
    const sectionsMovie = useSelector((state: IglobalReduser) => state.rootReduser.listMovieItem);
    const sectionsTV = useSelector((state: IglobalReduser) => state.rootReduser.listTVItem);
    const activeMenu = useSelector((state: IglobalReduser) => state.rootReduser.activeMenu);
    const dispatch = useDispatch();

    return (
        <header style={styles.header}>
            <div>
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
            </div>
            {activeMenu === 'Movie' && <ListMenu list={sectionsMovie} />}
            {activeMenu === 'TV' && <ListMenu list={sectionsTV} />}
        </header>
    )
}

export default Header;