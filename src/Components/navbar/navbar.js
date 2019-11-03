
import React from 'react';
import adidasLogo from './white-adidas-logo-transparent-6.png';
import './navbar.css';

/** 
  * @class NavBar
  * @classdesc A responsive, mobile friendly navbar for adidas site
  * @author Josue Resilien josue.resilienatgmail.com
  * @required image imports or image urls
  * @param Object props
  *     @param Number[] props.color - [r,g,b] color arrray for matching text color manipulation
*/
export default class NavBar extends React.Component{

    /**
     * @func componentDidMount()
     * @desc Runs after react comonent renders.
     * Sets the bottom state the first time component is rendered
     */
    componentDidMount(){
        
        if(document.location.hash==='#menu-toggle'){
            return document.querySelector('.nav-list > li:first-child > .menu-item').focus()
        }
        
    }

    render(){
        const rgb=this.props.color;
        const styleColor={
        color:`${`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}`
    };
    return(
        <header>
            <div className="row">
                <nav className="col-12" id='menu-toggle'>
                    <div className="nav-left col-1">
                        <img className="logo" src={adidasLogo} alt="adidas logo"></img>
                    </div>

                    
                    <a href="#menu-toggle" className="menu-toggle" aria-label="Open main menu">
                            <span className="fa fa-bars fa-3x" aria-hidden="true" ></span>
                    </a>

                    
                    <a href="#" id="menu-close" className="menu-close" aria-label="Close main menu">
                        <span className="fa fa-close fa-3x" aria-hidden="true"></span>
                    </a> 

                    <div className="col-3 spacer">
                    </div>
                    
                    <div className="col-4 nav-center-parent" aria-label="Main menu" >
                        <ul className="nav-list">
                            <li className="nav-center-child">
                                <a className="menu-item" href="#">SHOP</a>
                            </li>
                            <li className="nav-center-child">
                                <a className="menu-item" href="#">COLLECTION</a>
                            </li>
                            <li className="nav-center-child">
                                <a className="menu-item" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2 spacer">
                    </div>

                    <div className="nav-right col-2">
                        <button className="btn" id="adidas-url-btn" style={styleColor}>BACK TO ADIDAS.COM</button>
                    </div>
                </nav>
            </div>
        </header>
    );
    }
    
} 