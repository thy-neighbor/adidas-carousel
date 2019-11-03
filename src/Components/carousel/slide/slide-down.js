import React from 'react';
import './slide.css'

/**
 * @func SlideDown(props)
 * @desc Creates a slide of an image that navigates downward
 * @param object props
 *      @param string props.image - the source of the image 
 * @return JSX - slide w/ image 
 */
export default function SlideDown(props){
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }

    return(
        <div className="slide-container" style={styles}>
            
        </div>
    );
}