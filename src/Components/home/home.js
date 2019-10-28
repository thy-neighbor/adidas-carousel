import React from 'react';
import NavBar from '../navbar/navbar'
import Carousel from '../carousel/carousel'
import './home.css' 

export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            color:[0,0,0]

        }
    }

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
                    <div class="row">
                        <Carousel callBack={this.setColor}/>
                    </div>
                
                </section>
            </div>
        );
    }

}