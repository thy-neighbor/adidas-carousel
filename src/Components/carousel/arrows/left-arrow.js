import React from 'react'

/**
 * @func RightArrow(props)
 * @desc Creates a button to traverse carousel left (increment)
 * @param object props
 *      @param string props.prevSlide - calls parent -> <LeftArrow nextSlide/> function
 * @return JSX - button
 */
export default function LeftArrow(props){
    return(
        <button class="arrow-container" id="left-arrow-container" aria-label="Previous Image" aria-controls="carousel" onClick={props.prevSlide}>
            <i class="fas fa-arrow-circle-left fa-4x carousel-arrow" aria-hidden="true"></i>
        </button>
    );
}