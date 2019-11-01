
import React from 'react'

/**
 * @func RightArrow(props)
 * @desc Creates a button to traverse carousel right (increment)
 * @param object props
 *      @param string props.nextSlide - calls parent -> <RightArrow nextSlide/> function
 * @return JSX - button
 */

export default function RightArrow(props){
    return(
        <button class="arrow-container" id="right-arrow-container" aria-label="Next Image" aria-controls="carousel"  onClick={props.nextSlide}>
            <i class="fas fa-arrow-circle-right fa-4x carousel-arrow"  aria-hidden="true"></i>
        </button>
    );
}