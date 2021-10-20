import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import './style.css'
import { TimelineMax, Circ} from 'gsap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Home.css';


function Home() {
  
  let r1          = useRef(null)
  let loaderScene = useRef(null)
  let logo        = useRef(null)
  let fl          = useRef(null)
  let sl          = useRef(null)
  let title       = useRef(null)
  let timeline    = useRef(null)
  
  useEffect(() => {
    var tl = new TimelineMax();
      tl
        .from(logo, 2.5, {scale:0.8, opacity: 0, ease:Circ.easeOut}, 1)
      
        .from(title, 3,  {scale:0.8, opacity: 0, ease:Circ.easeOut}, 2)
      
        .to(fl, 2, {'transform': 'rotateZ(-20deg) translate(-129px, 0) scaleX(20)',ease:Circ.easeIn}, 3)
        .to(sl, 2, {'transform': 'rotateZ(-20deg) translate(131px, 0)  scaleX(20)',ease:Circ.easeIn}, 3)
      
        .to(sl, 1, {'transform': 'rotateZ(-20deg) translate(131px, 0)  scaleX(1)',ease:Circ.easeOut}, 5.1)
        .to(fl, 1, {'transform': 'rotateZ(-20deg) translate(-129px, 0) scaleX(1)',ease:Circ.easeOut}, 5.1)
      
        .to(loaderScene, .8, {'height': '0',ease:Circ.easeOut}, 8)
        .to(timeline,    .8, {css: {opacity: 1}   }, 8.5)
        .to(r1,          .8, {css: {visibility: 'visible'}   }, 8.5)
  })
        
  
  return(
        <>
          <body>
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
                        style="text-decoration:none;color:blue;
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
    </body>     
        </>
    )
}

export default Home