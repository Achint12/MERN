import React from "react";
import UserList from "../Components/UserList";
const users = () => {
    const USERS= [{id: 'u1',name: 'Achint', image: 'https://unsplash.com/photos/a-city-street-with-tall-buildings-and-a-bridge-6c90hRXZs1o',places: 3}];

    
return <UserList items= {USERS}/>;
};

export default users;
