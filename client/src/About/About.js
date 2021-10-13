import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/navbar';
import './About.css'
import ScrollCard from './scrollcard';
export default function About (){
    return (
        <>
          <Navbar/>
          <nav class="navbar background">
        <ul class="nav-list">
            <div class="logo"><img src=""></div>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Food">Food</a></li>
            <li><a href="#AboutUs">AboutUs</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
        </ul>
  
        <div class="rightNav">
            <input type="text" name="search" id="search">
            <button class="btn btn-sm">Search</button>
        </div>
    </nav>
  
    <section class="background firstsection">
        <div class="box-main">
            <div class="firstHalf">
                <p class="text-big">About US</p>
  
                <p class="text-small">
                    Here you will get to know the team 
                    members of our company
                </p>
  
                <br>
                  
                <p class="center"><a href="#Order" 
                    style="text-decoration:none;color:white;">
                    Below are the people who
                    works in our company</a>
                </p>
  
            </div>
        </div>
    </section>
  
    <section class="service">
        <h1 class="h-primary center" style=
            "margin-top:30px;text-align:center;">
            Our Team
        </h1>
          
        <div id="service">
            <div class="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture not displayed">
                <br>
  
                <p class="center">
                    <a href="#xyz"
                        style="text-decoration:none;color:black;
                        font-weight:bold;font-family: 'Langar', cursive;">
                        xyz
                    </a>
                </p>
  
  
                <br>
                  
<p>CEO and the Founder</p>
  
            </div>
  
            <div class="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture not displayed">
                <br>
  
                <p class="center">
                    <a href="#abc"
                        style="text-decoration:none;color:black;
                        font-weight:bold;font-family: 'Langar', cursive;">
                        abc
                    </a>
                </p>
  
  
                <br>
                  
<p>co-founder</p>
  
                <br>
                  
<p>You can contact him: -</p>
  
                  
<p>Foodscalablility@gmail.com</p>
  
            </div>
        </div>
    </section>
  
    <section class="services">
        <div id="services">
            <div class="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture not displayed">
                <br>
                <p class="center">
                    <a href="#xyz" style="text-decoration:none;
                        color:black;font-weight:bold;
                        font-family: 'Langar', cursive;">
                        asw
                    </a>
                </p>
  
                <br>
  
                  
<p>Food Manager of the company </p>
  
            </div>
        </div>
    </section>
      
    <footer class="background">
        <p class="text-footer">
            Copyright ©-All rights are reserved
        </p>
  
    </footer>
</>
}