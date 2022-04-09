import React from "react";
import { Image } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react'

const MovieDetails = () => {
    return (
        <div>
            <div>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' disabled />
                <div>
                    <h1></h1>
                    <p>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <div>
                        <Rating icon='star' defaultRating={3} maxRating={4} />
                        <button>Play Trailer</button>
                    </div>
                    <span></span>
                    <p>
                        <h3>Overview</h3>
                    </p>
                    <div>
                        <p>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}