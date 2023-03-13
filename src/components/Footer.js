import React from "react";

class Footer extends React.Component{
  render(){
    return(
      <div className="footer" id="foot">
        <div className="left">
          <p3 className="paragraph">OM OSS</p3>
          <p2 className="paragraph">
          <br></br>
          KUNDTJÄNST 	- kl 10-16
          <br></br>
          MAIL 		- info@bigarden.se
          <br></br>
          TELEFON 		- 072-2020206
          <br></br>
          ADRESS		- Ristorpsvägen 10, 132 37, Saltsjö boo
          <br></br>
          </p2>
        </div>
        <div className="middle">
          <a href="https://www.facebook.com/profile.php?id=100054669720271">
            <img className="object-position-1" id="logo_image" src={require('../files/facebook.png')} alt="Facebook" /></a>
          <a href="https://www.pinterest.se/bigarden/"> 
            <img className="object-position-1" id="logo_image" src={require('../files/pintrest.png')} alt="Pintrest" /></a>
        </div>  
        <div className="right">
          <p3 className="paragraph">INFORMATION</p3>
          <p2 className="paragraph">
          <br></br>
          <a href="/Info" className="myLink">BETALNING OCH LEVERANSVILKOR</a>
          <br></br>
          <a href="/Info" className="myLink">INTEGRITETSPOLICY</a>
          </p2>
        </div>
      </div>
    );
  }
}

export default Footer;