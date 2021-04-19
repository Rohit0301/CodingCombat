import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import './style.css'
import { TimelineMax, Circ} from 'gsap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



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
          <div
            class="main-wrap">
            <div 
                ref = {Element => loaderScene = Element}
                class="sd-loader-wrap">
                <div 
                  class="sd-loader">
                    <div 
                      ref = {Element => logo = Element}
                      class="sd-loader__logo"> BRUTE FORCE
                        <div 
                          ref = {Element => fl = Element}
                          class="sd-loader__logo--fl"></div>
                        <div 
                          ref = {Element => sl = Element}
                          class="sd-loader__logo--sl"></div>
                    </div>
                    <div 
                      ref = {Element => title = Element}
                      class="sd-loader__title">
                      The Greatest Platform for Algorithms
                    </div>
                </div>
            </div>
            <div 
              ref = {Element => timeline = Element}
              class="main-content">
                <div
                  ref = {Element => r1 = Element}
                  class = "bar">
                  <Navbar />
                </div>
                <header class="header">
                  <div class="section-inner">
                    
                    <div class="master-head">
                      <h1 class="page-title">The World Of Algorithms</h1>
                      <p class="page-description">Scroll down for a visual journey of Brute Force</p>
                    </div>
                      
                  </div> 
                </header> 
                <div>
                  <VerticalTimeline>
                    
                    
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#ffac41', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: '#ffac41', color: '#fff' }}
                      
                    >
                      <h1 className="vertical-timeline-element-title">Why BruteForce ?</h1>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac placerat eros, nec malesuada quam. Aliquam semper viverra ante, eget tincidunt purus rutrum in. Sed in nulla vitae mi dapibus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent facilisis nulla non vestibulum vulputate. Quisque sit amet accumsan dui. Duis eu turpis quis justo tempus lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      </p>
                    </VerticalTimelineElement>





                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <h1 className="vertical-timeline-element-title">Why DSA?</h1>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac placerat eros, nec malesuada quam. Aliquam semper viverra ante, eget tincidunt purus rutrum in. Sed in nulla vitae mi dapibus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent facilisis nulla non vestibulum vulputate. Quisque sit amet accumsan dui. Duis eu turpis quis justo tempus lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                      </p>
                    </VerticalTimelineElement>






                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: '#c72c41', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: '#c72c41', color: '#fff' }}
                      
                    >
                      <h1 className="vertical-timeline-element-title">Pre Requisites</h1>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac placerat eros, nec malesuada quam. Aliquam semper viverra ante, eget tincidunt purus rutrum in. Sed in nulla vitae mi dapibus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent facilisis nulla non vestibulum vulputate. Quisque sit amet accumsan dui. Duis eu turpis quis justo tempus lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline> 

                  <footer class="footer section">
                    <div class="section-inner">
                      
                      <div class="good-bye">
                        <p>That's all!</p>
                      </div> 

                    </div>
                  </footer> 



                </div>          
            </div>      
          </div>        
        </>
    )
}

export default Home