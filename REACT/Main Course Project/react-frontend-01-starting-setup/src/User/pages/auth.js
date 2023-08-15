import React from "react";


import { VALIDATOR_MINLENGTH,VALIDATOR_EMAIL } from "../../shared/Util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import './auth.css';

const Auth= ()=>{
 const [formState,inputHandler]=useForm({
        email:{
            value:'',
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    },false);

    const authSubmitHandler= event=> {
        event.preventDefault();
        console.log(formState.inputs);
    }
return (
<Card className ="authentication">
    <h2>
    Login Required
    </h2>
    
    <form onSubmit={authSubmitHandler}>
    <Input id="email"
    element="input" 
    type="email" 
    label="E-Mail" 
    validators={[VALIDATOR_EMAIL]}
    errorText="Please enter a valid email address."
    onInput={inputHandler}
    />
    <Input id="password"
    element="input" 
    type="password" 
    label="Password" 
    validators={[VALIDATOR_MINLENGTH(8)]}
    errorText="Please enter a valid email password(atleast 5 characters)."
    onInput ={inputHandler}
    />
    <Button type="submit" disable={!formState.isValid}>
    LOGIN
    </Button>
    </form>
    </Card>
    );
};

export default Auth;