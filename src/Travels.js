import React from "react";

const Travels = props => (
    <div>
            <figure>
                <img src={props.photo} alt={props.country} />
                <figcaption>
                    <cite>{props.destination} - {props.country} - {props.distance} from Bordeaux</cite>
                </figcaption>
            </figure>
    </div>
);

export default Travels;