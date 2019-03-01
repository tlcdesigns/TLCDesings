import React from 'react';
import '../assets/css/app.scss';
import "./landing/styles.css"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import 'material-icons';
import logo from '../assets/images/logo.svg';
import {Route} from "react-router-dom"
import Buying from "./buying";
import Landing from "./landing";
import Profile from "./profile";
import Search from "./search";
import Cart from "./cart";
import SignIn from "./sign/signin/signIn";
import SignUp from "./sign/signUp/signUp";


const App = () => (
    <div>
        <Route exact path={"/"} component={Landing}/>
        <Route path={"/search"} component={Search}/>
        <Route path={"/buying"} component={Buying}/>
        <Route path={"/cart/:userID"} component={Cart}/>
        <Route path={"/userProfile/:userID"} component={Profile}/>
        <Route path={"/signIn"} component={SignIn}/>
        <Route path={"/signUp"} component={SignUp}/>
    </div>
);

export default App;
