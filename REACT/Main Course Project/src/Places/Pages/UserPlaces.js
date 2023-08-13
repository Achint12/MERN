import React from "react";

import PlaceList from "../Components/PlaceList";

const Dummy_Places=[
    {
        id:'p1',
        title:'Random Shit',
        description: 'one of the most blah blah blah',
        imageURL:'https://en.wikipedia.org/wiki/Empire_State_Building#/media/File:Empire_State_Building_(aerial_view).jpg',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Random Shit',
        description: 'one of the most blah blah blah',
        imageURL:'https://en.wikipedia.org/wiki/Empire_State_Building#/media/File:Empire_State_Building_(aerial_view).jpg',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:'u2'
    }
];

const UserPlaces = () =>{
    return <PlaceList item={
        Dummy_Places
    }/>;
};

export default UserPlaces;