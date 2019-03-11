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
import Auth from "./HOC/checkAuth";
import ItemDetails from "./itemDetails"
import './search/style.css'


const App = () => (
    <div>
        <Nav/>
        <div className={"container row"}>
            {/*<Route exact path={"/"} component={Landing}/>*/}
            <Route path={"/Buying"} component={Auth(Buying)}/>
            <Route path={"/itemDetails"} component={ItemDetails}/> {/*:itemID*/}
            <Route path={"/Cart"} component={Auth(Cart)}/> {/*:userID*/}
            <Route path={"/UserProfile/:userID"} component={Auth(Profile)}/>
            <Route path={"/SignIn"} component={SignIn}/>
            <Route path={"/SignUp"} component={SignUp}/>
        </div>
        <div className={"row"}>
            <Route path={"/Search"} component={Search}/>
        </div>
        
    </div>

);

export default App;
