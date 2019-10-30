
import React from 'react';
import adidasLogo from './white-adidas-logo-transparent-6.png' 
import './navbar.css'


export default function NavBar(props){
    const rgb=props.color;
    const styleColor={
        color:`${`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}`
    };
    return(
        <header>
            <div class="row">
                <nav class="col-12">
                    <div class="nav-left col-1">
                        <img class="logo" src={adidasLogo} alt="adidas logo"></img>
                    </div>
                    <div class="col-3 spacer">
                    </div>
                    <div class="col-4 nav-center-parent">
                        <a href="#nav-list" id="main-menu-close" class="menu-close" aria-label="Close main menu">
                            <span class="sr-only">Close main menu</span>
                            <span class="fa fa-close fa-3x" aria-hidden="true"></span>
                        </a>
                        <a href="#main-menu" class="menu-toggle" aria-label="Open main menu">
                            <span class="fa fa-bars fa-3x" aria-hidden="true" ></span>
                        </a> 
                        <ul class="nav-list">

                            <li class="nav-center-child">
                                <a class="menu-item" href="#">SHOP</a>
                            </li>
                            <li class="nav-center-child">
                                <a class="menu-item" href="#">COLLECTION</a>
                            </li>
                            <li class="nav-center-child">
                                <a class="menu-item" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-2 spacer">
                    </div>
                    

                    <div class="nav-right col-2">
                        <button class="btn" id="adidas-url-btn" style={styleColor}>BACK TO ADIDAS.COM</button>
                    </div>
                </nav>
            </div>
        </header>
    );
} 