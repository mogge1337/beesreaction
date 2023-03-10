import React from "react";

class Footer extends React.Component{
  render(){
    return(
      <div class="footer" id="foot">
        <div class="left">
          <p3 class="paragraph">OM OSS</p3>
          <p2 class="paragraph">
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
        <div class="middle">
          <a href="https://www.facebook.com/profile.php?id=100054669720271">
            <img class="object-position-1" id="logo_image" src={require('../files/facebook.png')} alt="Facebook" /></a>
          <a href="https://www.pinterest.se/bigarden/"> 
            <img class="object-position-1" id="logo_image" src={require('../files/pintrest.png')} alt="Pintrest" /></a>
        </div>  
        <div class="right">
          <p3 class="paragraph">INFORMATION</p3>
          <p2 class="paragraph">
          <br></br>
          <a href="/Info" class="myLink">BETALNING OCH LEVERANSVILKOR</a>
          <br></br>
          <a href="/Info" class="myLink">INTEGRITETSPOLICY</a>
          </p2>
        </div>
      </div>
    );
  }
}

export default Footer;