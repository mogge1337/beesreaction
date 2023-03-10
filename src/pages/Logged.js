import React from "react";

class Logged extends React.Component{
  render(){
    return(
      <div className="contentOut"> 
    <div className="contentIn" >
      <div id="middle">
        MINA SIDOR
        <div className="grid-container2">
          <div className="um1">
            <div className="grid-container3">   
              <p8>
              Mitt konto
              <br/>
              <br/>
              Orderhistorik
              <br/>
              <br/>
              Inställningar
              </p8>
            </div>
          </div>
          <div className="um2">
            <img id="info" src={require('../files/info.png')} alt="info"/>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
  }
}

export default Logged;