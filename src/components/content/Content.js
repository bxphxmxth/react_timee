import React from "react";
import DisplayTime from "./displayTime";
import DemoComponent from "./demoComponent";
import { div } from "prelude-ls";

class Content extends React.Component{

     state = {

          formatTime : "phpTime"
     }

     handleClick = (format) =>{
          console.log(format)
          this.formatTime = format;
     }

     

     render(){
          //    let pageContent;
          //  if(this.currentPage == "accueil"){
          //      pageContent = <DemoComponent/>
          // }else{
          //      pageContent = <DisplayTime/>
          // }
          return(
               <div className="App-content">
                    <p> Logo </p>
                    

                    {this.props.currentPage}
                    {this.props.currentPage == "accueil" && <DemoComponent/>
                    
                    }
                    {this.props.currentPage =="heure" &&
                    
                    
                         <DisplayTime format={this.state.formatTime} />
                         }
                         {
                              this.props.currentPage== "configuration" && 

                         <div>
                         <button onClick={() => this.handleClick("jsTime")}>Javascript</button>
                          <button onClick={() => this.handleClick("phpTime")}>PHP</button>
                          <button onClick={() => this.handleClick("humainTime")}>Humain</button>
                    </div>

                         }

                         
                    </div>
          )
     }
}

export default Content