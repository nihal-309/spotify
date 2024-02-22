import React from 'react'
import { ReactDOM } from 'react'
import IMG1 from "./img1.png"
import IMG3 from "./img3.png"
import IMG2 from "./img2.png"
import IMG4 from "./img4.png"
import IMG5 from "./img5.png"
import IMG6 from "./img6.png"
import IMG7 from "./img7.png"
import IMG8 from "./img8.png"
import IMG9 from "./img9.png"
import IMG10 from "./img10.png"
import IMG11 from "./img11.png"
import IMG12 from "./img12.png"
import IMG13 from "./img13.png"


function real(){
    return(
        <>
            <h1>...</h1>
  <div class="full">
    <div class="left">
        <div class="one box">
        <div>
          <img id="oooo" src={IMG1} alt="" height="40" width="40" />
          <h2 id="pppp">Home</h2>
        </div>
        <div>
          <img id="iiii" src={IMG3} alt="" height="40" width="40" />
          <h2 id="qqqq">Search</h2>
        </div>  
        </div>
    <div class="two box">
        <br />
        <div>
          <img id="B" src={IMG4} alt="" height="35" width="70" />
          <img id="C" src={IMG5} alt="" height="40" width="40" />
           <h2 id="bbbb">Your Library</h2>
           <br />
           <br />
        </div>
         <br />
        
          <div id="gggg">
           <h3 id="hhhh">
            <br />
            Create your own Playlist
           </h3>
           <h4 id="hhhh">It is easy well help you </h4>
           <button class="button">Go Ahead</button>
          </div>
        <div>
            
            <br />
            <br />
        </div>
        <div id="kkkk">
            <h3 id="llll">
              
             Let's find some podcasts <br />to Follow 
            </h3>
         
            <h4 id="hhhh">We'll keep you updated on<br /> new episodes</h4>
            <button class="mutton">Click Here </button>
          </div>
        </div>
    </div>
    <div class="three box">
      <img id="F" src={IMG6} alt="" height="40" width="85" />
      <button class="kutton">Explore Premium </button>
      <img id="H" src={IMG7} alt="" height="40" width="125" />
      <br />
      <br />
      <br />
      <h2 id="A" text-align="left">Recently Played</h2>
      <br />
      <br />
      <br />

      <div>
        
      </div>
    
     <br />
     
      <div class="layout2">
        <img id="object3" src={IMG8} alt="" />
        <h3 className='ok1'>Faasle-Aditya</h3>
      </div>
      <div class="layout3">
        <img id="object4" src={IMG9} alt="" />
        <h3 className='ok2'>The Horror Show</h3>
      </div>
      <div class="layout4">
        <img id="object5" src={IMG10} alt="" />
        <h3 className='ok3'>A Spotify Original</h3>
      </div>
      <div class="layout5">
        <img id="object6" src={IMG11} alt="" />
        <h3 className='ok3'>All Out 00's Hindi</h3>
      </div>
       <div class="layout6">
        <img id="object7" src={IMG12} alt="" />
        <h3 className='ok3'>Love Stories</h3>
       </div>
       <div class="layout7">
        <img id="object8" src={IMG13} alt="" />
        <h3 className='ok3'>True Story bro</h3>
       </div>
    
     
     
    
      
    </div>
    <div class="four box">
      <h3 className='ok5'> Kaise ab Kahein - From "Gutur Gu"</h3>
    
      <div>
         <img id="fff" src={IMG2} alt="Kaise Ab Kahein "  />
      </div>
  
   
      <marquee> 
        <div id="S">
            <div id="aaaa">
      <h2 id="D">
         Kaise Ab Kahein-From "Gutur Gu" 
      </h2> 
        <h4 class="E">Gaurav Chatterji,Pratik Gangavane,Aasa Singh</h4>
      </div></div></marquee>
      <div id="M">
        <h3 id="L">
         <br />
         Your queue is empty
        </h3>
        <button id="bnb">Search for something new </button>
       
       </div>  
        </div>
        
        </div>
      
        </>
    )
}

export default real