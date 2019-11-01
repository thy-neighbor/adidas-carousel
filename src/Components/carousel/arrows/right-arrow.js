

import React from 'react'

export default function RightArrow(props){
    return(
        <button class="arrow-container" id="right-arrow-container" aria-label="Next Image" aria-controls="carousel"  onClick={props.nextSlide}>
            <i class="fas fa-arrow-circle-right fa-4x carousel-arrow"  aria-hidden="true"></i>
        </button>
    );
}