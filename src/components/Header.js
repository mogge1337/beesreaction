import React from "react";

class Header extends React.Component{
  render(){
    function searchBar(){
      document.getElementById("search").style.visibility='visible';
      document.getElementById("search").style.width='100%';
    }
    return(
      <div class="header" id="head">
          <div class="left" style={{textAlign: 'left'}}>
            <a href="/"><img id="logo_image" src={require('../files/logo.png')} alt="BIG&AringRDEN Logo" /></a>
            <a href="/" class="myLink"> <p9>BIGÅRDEN</p9></a>
          </div>
        <div class="middle">
            <div class="nav">
              <p4 class="paragraph"><label for="toggle" id="label">&#9776;</label></p4>
              <input type="checkbox" id="toggle" />
              <div class="menu">
                <a href="/Prod" class="myLink">ALLA PRODUKTER | </a>
                <a href="/Prod" class="myLink">BIKUPOR | </a>
                <a href="/Prod" class="myLink">BIREDSKAP | </a>
                <a href="/Prod" class="myLink">SKYDDSKLÄDER | </a>
                <a href="/Prod" class="myLink">HÅNUNGSHANTERING | </a>
                <a href="/Prod" class="myLink">VAXHANTERING</a>
                <a href="https://savethebees.com/"><img onmouseover="hoverBee(this)" id="bee" onmouseout="normalBee(this)" src={require('../files/bi.png')} alt="BEEEE" title="your text"/>
                </a>
              </div>
            </div>
        </div>  
        <div class="right">
          <a href="/Loggin"><img class="icon_image" id="icon1" src={require('../files/minasidor.png')} alt="MinaSidor" /></a>
          <img onClick={searchBar} class="icon_image" id="icon2" src={require('../files/magnifying.png')} alt="Sök" />
          <a href="/Korg"><img class="icon_image" id="icon3" src={require('../files/kundkorg3.png')} alt="Kundvagn" /></a>
        </div>
      </div>
    );
  }
}

export default Header;