import React from "react";
import UserList from "../Components/UserList";
const users = () => {
    const USERS= [
        {id: 'u1',name: 'Achint', image: 'https://camo.githubusercontent.com/6d8c31e9a4e83313449880f71aaa670e53f74ac81427b01fd93ad6ecf2eee9ad/68747470733a2f2f692e696d6775722e636f6d2f774c47474a49432e706e67',places: 3}
    ];

    
return <UserList items= {USERS}/>;
};

export default users;
