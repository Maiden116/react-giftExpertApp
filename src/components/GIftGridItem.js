import React from 'react'

export const GIftGridItem = ( {url,title,id} ) => {
    

    return (
        <div className='card animate__animated animate__fadeIn animate__slow'>
            <h4>{title}</h4>
            <img src={url} alt={title}/>            
        </div>
    )
}
