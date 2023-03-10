import React from "react";

class Korg extends React.Component{
  render(){
    return(
        <div className="contentOut"> 
          <div className="contentIn">
            <div id="middle">
              VARUKORGEN
              <div className="grid-container2">
                <div className="um1" style={{backgroundColor: "white"}}>
                  <div className="grid-container4">   
                    <div className="product1">
                        <img id="kundkBild"  src={require('../files/hanu.png')} alt="picture1" />
                      </div>
                      <div className="product">
                          <p3>
                          honungsbehallare 70L
                          <br/>
                          1700 kr
                          <br/>
                          - 1 +
                          </p3>
                      </div>
                      <div className="product2">
                        <img id="kundkBild" src={require('../files/pust.jpg')} alt="picture2" />
                      </div>
                      <div className="product">
                        <p3>
                          rokpust
                          <br/>
                          600 kr
                          <br/>
                          - 1 +
                        </p3>
                      </div>
                  </div>
                </div>
                <div className="um2" style={{backgroundColor: "white"}}>
                  <div>
                    Totalsumma
                    <p3>
                    <hr/>
                    2 varor - 2300 kr
                    <br/>
                    Frakt - 69 kr
                    <hr/>
                    Totalsumma - 2369 kr
                    <br/>
                    </p3>
                  </div>
                  <div>
                    <p9>
                    lagg till rabattkod:
                    </p9>
                    <br/>
                    <p3>
                      TILL BETALNING
                    </p3> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Korg;