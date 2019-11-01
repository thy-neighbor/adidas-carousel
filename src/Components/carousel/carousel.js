import React from 'react';
import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import SlideUp from './slide/slide-up'
import SlideDown from './slide/slide-down'
import ColorThief from 'colorthief'
import './carousel.css'
import p1 from './pictures/girl-1773902_1920.jpg'
import p2 from './pictures/bike-867229_1920.jpg'
import p3 from './pictures/model-2498663_1920.jpg'
import p4 from './pictures/portrait-3164868_1920.jpg'
import p5 from './pictures/portrait-3348496_1920.jpg'
import p6 from './pictures/sexy-3768718_1920.jpg'
import p7 from './pictures/shaman-2837843_1920.jpg'
import p8 from './pictures/woman-3146093_1920.jpg'

export default class Carousel extends React.Component{
    componentWillMount(){

    }
    constructor(props){
        super(props);

        this.state={
            images:[
                p8,
                p7,
                p6,
                p5,
                p4,
                p3,
                p2,
                p1
            ],
            index:[0,0],        //which means 0 and 1
            size:7,
            yOffset:[0,0],
            bottom:0
        };
    }
    componentDidMount(){
        let s=this.state.images.length;
        let b=-(this.slideHeight()*(s-1));
        
        console.log("p1 : ",p1);
        
        if(this.state.bottom===0){
            console.log("COMPONENTDIDMOUNT :", b);
            this.setState({
                yOffset:[0,b],
                bottom:b,
                size:s-1
            });

        }
        
    }

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

    copyArr(inp){
        let arr=[];

        for(var i=0;i<inp.length;i++){
            arr.push(inp[i]);
        }

        return arr;
    }

    slideHeight = () => {
        return document.querySelector('.slide-container').clientHeight
    }

    leftFocus = () =>{  //for choose focus for screen readers
        return document.querySelector('[id=left-arrow-container]').focus()
        
    }

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
                        {leftImages.map((image,i)=>(
                            <SlideDown image={image} key={i} curr={iter[1]}/>
                                
                        ))}
                    </div>
                    
                    {iter[0]>0 && iter[1]>0 && 
                        <LeftArrow prevSlide={()=>this.clickPrev(leftImages[iter[0]-1],iter[1]-1===0)}/>
                    }
                    
                </div>

                <div class="col-6 carousel-content" id="right-carousel">
                    {this.state.bottom!==0 &&
                        <div class="slider-wrapper" style={rightStyle}>
                            {rightImages.map((image,i)=>(
                                <SlideUp image={image} key={i}/>
                                    
                            ))}
                        </div>
                        }

                        {iter[1]<this.state.size && iter[1]<this.state.size && 
                            <RightArrow nextSlide={()=>this.clickNext(leftImages[iter[0]+1],iter[0]+1===this.state.size)}/>
                        }
                    
                </div>                
            </div>


        );
    }
}