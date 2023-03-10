import React from "react";

class Loggin extends React.Component{
  render(){
    return(
        <div className="contentOut"> 
          <div className="contentIn">
            <div className="middle" id="middle">
              MINA SIDOR
              <br/>
              <br/>
              <form className="login-form">
                <input id="logginForm" type="text" placeholder="användarnamn" />
                <br/>
                <input id="logginForm" type="password" placeholder="lösenord"/>
              </form>
              <br/>
              <div>
                <div>
                  <a id="logclick" href="/Logged"><p2>LOGGA IN</p2></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Loggin;