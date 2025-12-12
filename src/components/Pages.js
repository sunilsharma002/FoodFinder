import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import Calories from './Calories';
import MealPlanning from './MealPlanning';
import Login from './Login';
import Signup from './Signup';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/Login" element={<Login />} exact></Route>
            <Route path="/Signup" element={<Signup />} exact></Route>
            <Route path="/Recipes" element={<Recipes />} exact></Route>
            <Route path="/Favorites" element={<Favorites />} exact></Route>
            <Route path="/Calories" element={<Calories />} exact></Route>
            <Route path="/Meal-planning" element={<MealPlanning />} exact></Route>
        </Routes>
    )
}

export default Pages;