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
import Search from "./search/";
import Cart from "./cart";
import SignIn from "./sign/signin/signIn";
import SignUp from "./sign/signUp/signUp";
import Nav from "./nav/Nav"
import Auth from "./HOC/checkAuth"


const App = () => (
    <div>
        <Nav/>
        <div className={"container row"}>
            {/*<Route exact path={"/"} component={Landing}/>*/}
            <Route path={"/Search"} component={Search}/>
            <Route path={"/Buying"} component={Auth(Buying)}/>
            <Route path={"/Cart/:userID"} component={Auth(Cart)}/>
            <Route path={"/UserProfile/:userID"} component={Auth(Profile)}/>
            <Route path={"/SignIn"} component={SignIn}/>
            <Route path={"/SignUp"} component={SignUp}/>
        </div>
    </div>

);

export default App;
