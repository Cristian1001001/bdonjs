import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import {Restaurants} from "./pages/restaurants";
import {SignUp} from "./pages/signUp";
import {Products} from "./pages/products";
import {SignIn} from "./pages/signIn";
import {useSelector} from "react-redux";
import {ShoppinCart} from "./pages/shoppingCart";


export const UseRoutes = () =>{
    const {isLogged} = useSelector(state=>state.auth)
    if (isLogged) {
        return (
            <Switch>
                <Route path="/restaurants" exact>
                    <Restaurants/>
                </Route>
                <Route path="/products/:rid">
                    <Products/>
                </Route>
                <Route path="/products" exact>
                    <Products/>
                </Route>
                <Route to="/shoppingCart" >
                    <ShoppinCart/>
                </Route>
                <Redirect to="/restaurants" exact>
                    <Restaurants/>
                </Redirect>
            </Switch>
        )
    }
        return (
            <Switch>
                <Route path="/signUp" exact>
                    <SignUp/>
                </Route>
                <Route path="/signIn" exact>
                    <SignIn/>
                </Route>
                <Redirect to="/signUp">
                    <SignUp/>
                </Redirect>
            </Switch>
        )

}

