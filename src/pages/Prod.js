import React from "react";

class Prod extends React.Component{
  render(){
    return(
        <div className="contentOut"> 
          <div className="contentIn"> 
            <div className="middle" id ="middle">
              <div className="contentIn">
                <div className="left" id ="left">
                  filtrera 
                  <img id="logo_image" src={require('../files/downarrow.png')} alt="down" />
                </div>
                <div className="middle" id ="middle">
                  ALLA PRODUKTER
                </div>  
                <div className="right" id ="right">
                  sortera
                  <img id="logo_image" src={require('../files/downarrow.png')} alt="down" />
                </div>
              </div>
              <ul className="grid-wrapper">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
                <li>item 6</li>
                <li>item 7</li>
                <li>item 8</li>
                <li>item 9</li>
                <li>item 10</li>	
                <li>item 11</li>	
                <li>item 12</li>	
                <li>item 13</li>
                <li>item 14</li>
                <li>item 15</li>
                <li>item 16</li>
                <li>item 17</li>
                <li>item 18</li>
                <li>item 19</li>
                <li>item 20</li>
              </ul>
              <div className="contentIn" >
                <div className="left" id ="left">
                  {'<<'}
                </div>
                <div className="middle" id ="middle">
                  SIDA 1
                </div>  
                <div className="right" id ="right">
                  {'>>'}
                </div>
              </div>
            </div> 
          </div>
        </div>
      );
  }
}

export default Prod;