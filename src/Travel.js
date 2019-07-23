import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt={country} />
        <figcaption>
            <cite>{destination} - {country} - {distance} from Bordeaux</cite>
        </figcaption>
    </figure>
);

export default Travel;