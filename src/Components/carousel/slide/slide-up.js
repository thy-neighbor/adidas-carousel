import React from 'react';
import './slide.css'

/**
 * @func SlideUp(props)
 * @desc Creates a slide of an image that navigates upward
 * @param object props
 *      @param string props.image - the source of the image 
 * @return JSX - slide w/ image 
 */
export default function SlideUp(props){
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        transform: `scaleX(-1)`
      }
    return(
        <div className="slide-container" style={styles}>
            
        </div>
    );
}