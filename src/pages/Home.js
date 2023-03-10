import React,{useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
  console.log("Captcha value:", value);
}


const Home = () => {
  const [] = useState(false);


  function inputBlur() {
    document.getElementById("search").style.visibility='hidden';
    document.getElementById("search").style.width='0%';
  }

    return(
        <div className="contentOut"> 
          <div className="contentIn">
            <div>
              <input className="search" id="search" type="text" onBlur={inputBlur} placeholder= "sök..." />
              <br></br>
              <div className="bild">
                <img id="bildspel" src={require('../files/bilds2.jpg')} alt="Bildspel" />
              </div>
              <div className="grid-container3">   
                <div className="1" id="one">
                  <video width="100%" height="100%" controls>
                    <source src={require('../files/beevid.mp4')} type="video/mp4" />
                    This browser does not support video tag.
                  </video>
                </div>
                <div className="2" id="two">
                  <p>LOREM IPSUM</p>
                </div>  
                <div className="3" id="three">
                  <ReCAPTCHA
                    sitekey="6LdCMu0kAAAAAOiGXY0zJEWANMLhKPDU0VwJRfRP"
                    className="captcha"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div> 
          </div>
        </div>
    );
}

export default Home;