

import React from 'react'

export default function LeftArrow(props){
    return(
        <button class="arrow-container" id="left-arrow-container" aria-label="Previous Image" aria-controls="carousel" onClick={props.prevSlide}>
            <i class="fas fa-arrow-circle-left fa-4x carousel-arrow" aria-hidden="true"></i>
        </button>
    );
}