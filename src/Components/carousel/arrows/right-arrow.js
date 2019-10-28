

import React from 'react'

export default function RightArrow(props){
    return(
        <div class="arrow-container" id="right-arrow-container" onClick={props.nextSlide}>
            <i class="fas fa-arrow-circle-right fa-4x carousel-arrow"  aria-hidden="true"></i>
        </div>
    );
}