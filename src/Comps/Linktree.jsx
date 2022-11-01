import React from 'react'
import '../Styles/Linktree.css'
import user from "../images/user_img.jpg"
import github from "../images/github.svg"
import slack from "../images/slack.svg"



const Linktree = () => {
  return (
      <main>
      <div className="card-container">
        <div id="profile_img">
        <img src={user} alt="me" className="pro"/>
        </div>
        <p id="name"> Sunday Robert</p>
          <div className="btns">
            <button className="btn" id="twitter" > 
          <a href="https://twitter.com/sunNEfyzhi?t=JVFXXDc9N_PVG0wSUInh8A&s=09" target="_blank"> 
           <h3>  Twitter </h3>
          </a>
            </button>
            
         <button className="btn" id="btn_zuri">  
           <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile/tree/master/src%2Fresources" target="_blank"> 
            <h3> Zuri Team  </h3>
           </a> 
         </button>
            
         <button className="btn" id="books">   <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile/tree/master/src%2Fresources" target="_target"> 
           <h3> Zuri Books</h3>  
           <p>  Think before you speak. Read before you think. – Get books here to have great thoughts </p>
         </a>
        </button>
            
            <button className="btn" id="book-python">
              <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile/tree/master/src%2Fresources" target="_blank"> 
               <h3> Python Books </h3>  
                <p> Want to learn python with headaches? Hit this button </p>
              </a> 
          </button>
            
            <button className="btn" id="pitch"> 
              <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile/tree/master/src%2Fresources"  target="_blank">
               <h3> Background check for coders </h3>
                <p> Don't miss out on those gigs and job offers. Hit this button, don't dull</p>
              </a> 
            </button>
            
            <button className="btn" id="book-design">
              <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile/tree/master/src%2Fresources" target="_blank">
                <h3> Design Books </h3>
                <p> Bring out the creativity in you with these simplified design books from </p>
              </a>
            </button>
            
          </div>
        
      <div className="icons"> 
        <div className="icon-img">
          <a href="https://github.com/efyzhi?tab=repositories" target="_blank"> 
      <img src={github} alt="github"/> </a>
        </div>

      <div className="icon-img">
          <a href="https://www.slack.com" target="_blank"> <img src={slack} alt="github"/> </a>
        </div>
      </div>
       </div>
      </main>
    )
}

export default Linktree