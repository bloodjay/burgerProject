import React from 'react';

import classes from './Burger.css';
import BurgerIn from './Burgerin/Burgerin';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        //console.log('firstloop',Object.keys(props.ingredients));
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            //console.log('secondloop',igKey)
            return <BurgerIn key={igKey+i} type={igKey} />
        }) //[]
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[]);
    //console.log(transformIngredients);
    if(transformIngredients.length === 0){
       transformIngredients = <p>Please start with some ingredients</p>
    }
    return(
        <div className={classes.Burger}>
           <BurgerIn type = "bread-top"/>
           {transformIngredients}
           <BurgerIn type = "bread-bottom"/>
        </div>
    );
}

export default burger;