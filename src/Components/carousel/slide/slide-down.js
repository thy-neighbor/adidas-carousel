import React from 'react';
import './slide.css'


export default function SlideDown(props){
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }

    return(
        <div class="slide-container" style={styles}>
            
        </div>
    );
}