import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import { IglobalReduser } from "Interfaces/globalInterfaces";
import ListMenu from "Components/ui/ListMenu";
import { switchActiveMenu } from "Redux/rootRedux/action";

const Header = () => {
    const sectionsMovie = useSelector((state: IglobalReduser) => state.rootReduser.listMovieItem);
    const sectionsTV = useSelector((state: IglobalReduser) => state.rootReduser.listTVItem);
    const activeMenu = useSelector((state: IglobalReduser) => state.rootReduser.activeMenu);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div>
                <Button
                    variant="outlined"
                    className={activeMenu !== 'Movie' ? "header__movie" : "header__movie active"}
                    onClick={() => dispatch(switchActiveMenu("Movie"))}>
                    Movie
                </Button>
                <Button variant="outlined"
                    className={activeMenu !== 'TV' ? "header__tv" : "header__tv active"}
                    onClick={() => dispatch(switchActiveMenu("TV"))}>
                    TV
                </Button>
                <Button variant="outlined"
                    className="header__people"
                    onClick={() => dispatch(switchActiveMenu("People"))}>
                    People
                </Button>
            </div>
            {activeMenu === 'Movie' && <ListMenu list={sectionsMovie} />}
            {activeMenu === 'TV' && <ListMenu list={sectionsTV} />}
        </header>
    )
}

export default Header;