

import React from 'react'

export default function LeftArrow(props){
    return(
        <div class="arrow-container" id="left-arrow-container" onClick={props.prevSlide}>
            <i class="fas fa-arrow-circle-left fa-4x carousel-arrow" aria-hidden="true"></i>
        </div>
    );
}