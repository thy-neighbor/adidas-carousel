import React from 'react';
import './slide.css'


export default function SlideUp(props){
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        transform: `scaleX(-1)`
      }
    return(
        <div class="slide-container" style={styles}>
        </div>
    );
}