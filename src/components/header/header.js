import React from "react";
import DemoComponent from "../content/demoComponent"
// import logo from "./logo.svg";
import Navigation from "./navigation";
import DisplayTime from "../content/displayTime";
import Content from "../content/Content"

class Header extends React.Component{


     state = {

          currentPage : "configuration"

     }

     


     onNavigationParent = (destination) =>{
          this.setState({
               currentPage : destination
          })
     }

     

     
     render(){

          //  let pageContent;
          //  if(this.currentPage == "accueil"){
          //      pageContent = <DemoComponent/>
          // }else{
          //      pageContent = <DisplayTime/>
          // }
          return(
               
               <header className="App-header">
               <Navigation onNavigation={this.onNavigationParent}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Content currentPage={this.state.currentPage} />
        {/* {this.currentPage}
        { this.currentPage == "accueil" && <DemoComponent/>}
        {this.currentPage == "heure" &&  */


        <div>
             {/* <DisplayTime format="phpTime"/>
             <DisplayTime format="jsTime"/>
             <button onClick={() => this.handleClick("jsTime")}>Javascript</button>
             <button onClick={() => this.handleClick("phpTime")}>PHP</button>
             <button onClick={() => this.handleClick("humainTime")}>Humain</button> */}
        </div>
        
        }
        
        
        
      </header>
          )
     }
}

export default Header;