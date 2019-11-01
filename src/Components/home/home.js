import React from 'react';
import NavBar from '../navbar/navbar'
import Carousel from '../carousel/carousel'
import './home.css' 

/** 
  * @class Home
  * @classdesc Homepage of faux adidas adicolor carousel
  * @author Josue Resilien josue.resilienatgmail.com
  * @required NavBar.js , Carousel.js
*/
export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            color:[0,0,0]   //rgb color for color animation

        }
    }

    /**
     * @func setColor(data)
     * @desc Sets rgb color state
     * @param Number[] data - array of rgb color data. [r,g,b]
     */
    setColor = (data) => {
        console.log("HOME - setColor: ",data);
        this.setState({
            color:data
        });
    }

    render(){
        const rgb =this.state.color;
        const style={
            background:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
            
        }
        return(
            <div class="home-container" style={style}>
                <NavBar color={rgb}/>
                <section id="home-content">
                    <div class="row no-margin-bottom">
                        <Carousel callBack={this.setColor}/>
                    </div>
                
                </section>
            </div>
        );
    }

}