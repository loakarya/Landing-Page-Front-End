import React from 'react';

export default function ProductImage (props) {
    return ( 
        <div className="">
            <img 
                src={props.src} 
                alt={props.alt}     
            />
        </div>
    );
}