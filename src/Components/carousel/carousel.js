import React from 'react';
import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import SlideUp from './slide/slide-up'
import SlideDown from './slide/slide-down'
import './carousel.css'
import p1 from './pictures/girl-1773902_1920.jpg'
import p2 from './pictures/bike-867229_1920.jpg'
import p3 from './pictures/model-2498663_1920.jpg'
import p4 from './pictures/portrait-3164868_1920.jpg'
import p5 from './pictures/portrait-3348496_1920.jpg'
import p6 from './pictures/sexy-3768718_1920.jpg'
import p7 from './pictures/shaman-2837843_1920.jpg'
import p8 from './pictures/woman-3146093_1920.jpg'


/** 
  * @class Carousel
  * @classdesc creates a double image carousel where the slides move simultaneously
  * and each slider travels in the opposite direction.
  * @author Josue Resilien josue.resilien@gmail.com
  * @required image imports or image urls
*/
export default class Carousel extends React.Component{
    constructor(props){
        super(props);

        this.state={
            images:[    //arr of images
                p8,
                p7,
                p6,
                p5,
                p4,
                p3,
                p2,
                p1
            ],
            index:[0,0],        //arr holding the index for each slide column
            size:7,             //size of the image arr
            yOffset:[0,0],      //offset arr for each slide column
            bottom:0            //holds the value of the bottom of the column in pixels
        };
    }

    /**
     * @func componentDidMount()
     * @desc Runs after react comonent renders.
     * Sets the bottom state the first time component is rendered
     * 
     */
    componentDidMount(){
        let s=this.state.images.length;
        let b=-(this.slideHeight()*(s-1));
        
        if(this.state.bottom===0){
            console.log("COMPONENTDIDMOUNT :", b);
            this.setState({
                yOffset:[0,b],
                bottom:b,
                size:s-1
            });

        }
        
    }


    /**
     * @desc click next event for right button, increments the index and yOffset state
     * @param string $next - the next image src to be displayed
     * @param bool $unFocus - if false button is still active,
     * if true button dissappeared and other button needs to be focused for screen readers
     * 
     */
    clickNext(next,unFocus){ 
        console.log("CAROUSEL - clickNext -> next: ",next);
        if(unFocus){
            this.leftFocus();
        }   

        let h=this.slideHeight();
        
        this.props.callBack(this.averageColor(next));

        //if next is the last element focus on other cursor document.querySelector('[id=left-arrow-container]')

        this.setState(prevState => ({
            index:[prevState.index[0]+1,prevState.index[1]+1],
            yOffset:[prevState.yOffset[0]-h,prevState.yOffset[1]+h]
        }));
    }

    /**
     * @desc click prev event for left button, decrements the index and yOffset state
     * @param string next - the next image src to be displayed
     * @param bool unFocus - if false button is still active,
     * if true button dissappeared and other button needs to be focused for screen readers
     */
    clickPrev(prev,unFocus){ 
        console.log("CAROUSEL - clickPrev -> prev: ",prev);
        if(unFocus){
            this.rightFocus();
        }   

        let h=this.slideHeight();
        
        this.props.callBack(this.averageColor(prev));
        this.setState(prevState => ({
            index:[prevState.index[0]-1,prevState.index[1]-1],
            yOffset:[prevState.yOffset[0]+h,prevState.yOffset[1]-h]
        }));
    }


    /**
     * @func averageColor(imgSrc)
     * @desc Gets a rgb coordinate of an image near an edge, by using an "unseen canvas element"
     * @param string imgSrc - the image src used to get pixel data from
     * @return number[] - array of rgb color data. [r,g,b]
     */
    averageColor(imgSrc){
        let canvas = document.createElement('canvas');
        let ctx= canvas.getContext('2d');

        const img = new Image();
        img.src = imgSrc;

        ctx.drawImage(img,0,0);
        let imgData = ctx.getImageData(10, 10,2,2);

        let rgb;
        console.log("imageData",imgData.data[0]);
        rgb=[imgData.data[0],imgData.data[1],imgData.data[2]];


        return(rgb);

    }

    
    /**
     * @func copyArr(inp)
     * @desc Make a new array by coping a previous
     * @param <x>[] inp - inp array to copy 
     * @return <x>[] - array identical to input, referenced in different data space
     */
    copyArr(inp){
        let arr=[];

        for(var i=0;i<inp.length;i++){
            arr.push(inp[i]);
        }

        return arr;
    }

    /**
     * @func slideHeight
     * @desc Gets the size of the carousel from the application
     * @return Number - the height of the carousel
     */
    slideHeight = () => {
        return document.querySelector('.slide-container').clientHeight
    }
    /**
     * @accessibilty
     * @func leftFocus
     * @desc Sets the focus to the left arrow in the carousel
     * @return void
     */
    leftFocus = () =>{  //for choose focus for screen readers
        return document.querySelector('[id=left-arrow-container]').focus()
        
    }
    /**
     * @accessibilty
     * @func rightFocus
     * @desc Sets the focus to the right arrow in the carousel
     * @return void
     */
    rightFocus = () =>{ //for choose focus for screen readers
        return document.querySelector('[id=right-arrow-container]').focus()
        
    }

    render(){
        let iter=this.state.index;
        let leftImages=this.copyArr(this.state.images);
        leftImages.reverse();
        let rightImages=this.state.images;

        const leftStyle={//down
            transform: `translateY(${this.state.yOffset[0]}px)`,
            transition: 'transform ease-out 1.00s'
        };

        const rightStyle={//up
            transform: `translateY(${this.state.yOffset[1]}px)`,
            transition: 'transform ease-out 1.00s'
        };

        

        return(
            <div class="col-12" id="carousel">
                <div class="col-6 carousel-content" id="left-carousel">
                    <div class="slider-wrapper" style={leftStyle}>
                        //create all the images
                        {leftImages.map((image,i)=>(
                            <SlideDown image={image} key={i} curr={iter[1]}/>
                                
                        ))}
                    </div>
                    //if index is at the beginning of the array left arrow dissapears
                    {iter[0]>0 && iter[1]>0 && 
                        <LeftArrow prevSlide={()=>this.clickPrev(leftImages[iter[0]-1],iter[1]-1===0)}/>
                    }
                    
                </div>

                <div class="col-6 carousel-content" id="right-carousel">
                    {this.state.bottom!==0 &&
                        <div class="slider-wrapper" style={rightStyle}>
                            //create all the images
                            {rightImages.map((image,i)=>(
                                <SlideUp image={image} key={i}/>
                                    
                            ))}
                        </div>
                        }
                        //if index is at the end of the array right arrow dissapears
                        {iter[1]<this.state.size && iter[1]<this.state.size && 
                            <RightArrow nextSlide={()=>this.clickNext(leftImages[iter[0]+1],iter[0]+1===this.state.size)}/>
                        }
                    
                </div>                
            </div>


        );
    }
}