import React from "react";
import Travels from "./Travels";
// src/Travel.js

const travels = [
    {
        destination : "Newcastle",
        country : "England",
        photo : "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        distance : "1 130 km",
        id : 1
    },
    {
        destination : "Edinburgh",
        country : "Scotland",
        photo : "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        distance : "1 234 km",
        id : 2
    },
    {
        destination : "Barcelona",
        country : "Spain",
        photo : "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        distance : "444 km",
        id : 3
    },
    {
        destination : "Athens",
        country : "Greece",
        photo : "https://images.unsplash.com/photo-1540394748912-578b3d2250d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        distance : "2 156 km",
        id : 4
    },
    {
        destination : "Grand Baie",
        country : "Mauritius Island",
        photo : "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        distance : "9 298 km",
        id : 5
    }
];

const map = () => (
    <div>
        {travels.map(travel => (
            <Travels destination={travel.destination} country={travel.country} distance={travel.distance} photo={travel.photo} key={travel.id}/>
        ))}
    </div>
);

export default map;