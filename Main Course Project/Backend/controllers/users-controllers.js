const uuid= require('uuid/v4');
const {validationResult}= require('express-validator')

const HttpError = require('../models/http-error');

const DUMMY_USER=[
    {
        id:'u1',
        name:"Achint",
        email:"email@email.com",
        password:'testers'
    }
];

const getUsers = (req, res, next )=>{
res.json({users: DUMMY_USER});
};

const signup= (req, res, next)=>{
    const errors = validationResult(req);
  if(!errors.isEmpty()){
    throw new HttpError('invalid inputs passed please check your data',422);
  }
const {name, email, password}= req.body;
const hasUser= DUMMY_USER.find(u=> u.email === email);
if(hasUser){
    throw new HttpError("could not create user email already exist ", 422)
}

const creadedUser={
    id: uuid(),
    name,
    email,
    password
    
};
DUMMY_USER.push(creadedUser);
res.status(201).json({user: creadedUser});
};
const login= (req, res, next)=>{
    const{email,password}= req.body;
    
    const identifiedUser = DUMMY_USER.find(u=> u.email=== email);
    if (!identifiedUser|| identifiedUser.password!== password){
        throw new HttpError("could not identify user", 401)
    }
res.json({message:'Logged in !'});

};

exports.getUsers= getUsers;
exports.signup= signup;
exports.login = login;
