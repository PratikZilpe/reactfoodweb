//import { usestate, useEffect } from "react"
import './App.css';
import Header from './My component/Header';
//import { useState } from 'react';
//import {Units} from './My component/Units';
//import {Footer} from './My component/Footer';
//import { Categories } from './My component/Categories';
import RecipeItem from './My component/RecipeItem';
//import Recipes from './My component/Recipes';
//import Meal from './My component/Meal';
//import RecipesItems from './My component/RecipesItems';

//const apiUrl = "https://www.themaldb.com/api/json/v1/1/search.php?s=";

function App() {

 // const [filteredItem, setFilteredItem] = useState('');

 const filteredFood = () => {
   
 } 


  return (
    <>
    
    <Header foodSelection={filteredFood}/>
    {/* <Units/>
    <Footer/>
    <Categories/> */}
    <RecipeItem />
  

    {/* <Recipes></Recipes> */}
    {/* <Meal></Meal> */}
   

    </>
   
  );
}

export default App;
