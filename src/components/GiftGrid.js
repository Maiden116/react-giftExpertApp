import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGitfs';
import { GIftGridItem } from './GIftGridItem';

export const GiftGrid = ({category}) => {


    const {data:images, loading} = useFetchGifts(category);

    return (
        <>
        <h3 className="animate__animated animate__backInLeft animate__faster">{category}</h3>
        { loading && 'Cargando...' }
         <div className='card-grid'>
                {images.map(img =>(    

                        <GIftGridItem 
                        key={img.id}
                        {...img}/>
  
                ))}
            
        </div> 
        </>
    )
}
