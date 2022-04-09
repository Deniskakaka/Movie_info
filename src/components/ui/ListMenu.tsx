import React from "react";
import SmoothList from 'react-smooth-list';
import { Link } from "react-router-dom";
import { IMovieMenu, ITVMenu } from "Root/interfaces/interfaceGlobalObject/rootReduserObjects";

type Props = {
    list: IMovieMenu[] | ITVMenu[]
}

const ListMenu = (props: Props) => {
    return (
        <SmoothList className="list_menu">
            {props.list.map(el =>
                <div className="list_menu__item">
                    {el.name}
                    <img src={el.image} />
                </div>
            )}
        </SmoothList>
    )
};

export default ListMenu;