import React from "react";

class Header extends React.Component{
  render(){
    function searchBar(){
      document.getElementById("search").style.visibility='visible';
      document.getElementById("search").style.width='100%';
    }
    return(
      <div className="header" id="head">
          <div className="left" style={{textAlign: 'left'}}>
            <a href="/"><img id="logo_image" src={require('../files/logo.png')} alt="BIG&AringRDEN Logo" /></a>
            <a href="/" className="myLink"> <p9>BIGÅRDEN</p9></a>
          </div>
        <div className="middle">
            <div className="nav">
              <p4 className="paragraph"><label for="toggle" id="label">&#9776;</label></p4>
              <input type="checkbox" id="toggle" />
              <div className="menu">
                <a href="/Prod" className="myLink">ALLA PRODUKTER | </a>
                <a href="/Prod" className="myLink">BIKUPOR | </a>
                <a href="/Prod" className="myLink">BIREDSKAP | </a>
                <a href="/Prod" className="myLink">SKYDDSKLÄDER | </a>
                <a href="/Prod" className="myLink">HÅNUNGSHANTERING | </a>
                <a href="/Prod" className="myLink">VAXHANTERING</a>
                <a href="https://savethebees.com/"><img onmouseover="hoverBee(this)" id="bee" onmouseout="normalBee(this)" src={require('../files/bi.png')} alt="BEEEE" title="your text"/>
                </a>
              </div>
            </div>
        </div>  
        <div className="right">
          <a href="/Loggin"><img className="icon_image" id="icon1" src={require('../files/minasidor.png')} alt="MinaSidor" /></a>
          <img onClick={searchBar} className="icon_image" id="icon2" src={require('../files/magnifying.png')} alt="Sök" />
          <a href="/Korg"><img className="icon_image" id="icon3" src={require('../files/kundkorg3.png')} alt="Kundvagn" /></a>
        </div>
      </div>
    );
  }
}

export default Header;