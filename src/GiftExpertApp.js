import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GiftGrid } from './components/GiftGrid';


export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState(["Samurai X"]);

    return (
        <>
            <h2>GiftExpert App</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr/>



            
            <ol>
                 { categories.map( category =>
                    <GiftGrid 
                        key = {category}
                        category = { category }
                    />
                 ) }
            </ol>
        </>

    )
}