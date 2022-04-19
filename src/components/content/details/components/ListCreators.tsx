import React from "react";
import { ICast } from "Root/interfaces/interfaceClassMovie/interfaceCast";

type Props = {
    class: string,
    arrayItem: ICast[]
}

const ListCreators = (props: Props) => {
    return (
        <div className={`${props.class}`}>
            {
                props.arrayItem.map((el: ICast, index: number) =>
                    <div className={`${props.class}__item`} key={index}>
                        <span>{el.name}</span>
                        <span>{el.known_for_department}</span>
                    </div>)
            }
        </div>
    )
};

export default ListCreators;