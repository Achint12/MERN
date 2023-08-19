const uuid= require('uuid/v4');
const {validationResult}= require('express-validator')

const HttpError = require('../models/http-error');
const User = require('../models/user');


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

const signup= async (req, res, next)=>{
    const errors = validationResult(req);
  if(!errors.isEmpty()){
    return next(new HttpError('invalid inputs passed please check your data',422)); 
  }
const {name, email, password, places }=  req.body;

let existingUser
try{
 existingUser= await User.findOne({email: email})
}
 catch(err) {
    const error = new HttpError(
        "Signing up failed pls try again.",500
    );
    return next (error);
 }
if (existingUser){
    const error = new HttpError(
        'user exist',422
    );
    return next(error);
}

const createdUser = new User({
    name,
    email,
    image:"https://unsplash.com/photos/I0crOZHram8",
    password,
    places
});
try{
    await createdUser.save();
  } catch (err) {
  const error = new HttpError(
    ' siging up failed',500
  );
  return next (error);
  }

res.status(201).json({user: createdUser.toObject({getters:true})});
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
