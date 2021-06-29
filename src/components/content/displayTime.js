import { div } from 'prelude-ls';
import React, {useState} from 'react';
import DemoComponent from "./demoComponent"



// class DisplayTime extends React.Component {

//      currentPage = "heure";


//      currentDate = Date().toLocaleString();

//      componentDidMount(){
//           setInterval(() =>{
//                this.setState({

//                     dateCourante : new Date()
//                })
//           }, 1000)
//      }
      
//       state = {
//            dateCourante : new Date()
//       }

//      render() {

//           console.log(this.props);
//           let dateCourante = new Date();
//           let tempsJavaScript = this.state.dateCourante.getTime();
//           let tempsPHP = tempsJavaScript/1000;

//           return(
//                <div>
//                    { this.props.format ==="jsTime" && 
                   
//                     <p>
//                          Temps JS : {tempsJavaScript} millisecondes
//                     </p>
//                    }
//                    { this.props.format === "phpTime" && 
//                     <p>
//                          temps PHP : {tempsPHP} secondes

//                     </p>
//                    }
//                    { this.props.format === "humainTime" && 
//                     <p>
//                          date humain : {this.state.dateCourante.getDate()}/{this.state.dateCourante.getMonth()+1}/{this.state.dateCourante.getFullYear()}
//                     </p>                
//                    }
//                </div>
//           )
//      }
// }


function DisplayTime(){
     let [tempsJavaScript, setTempsJavascript] = useState(new Date().getTime());

     return(
          <div>
               <p>
                    temps JavaScript: {tempsJavaScript} en millisecondes
               </p>
               <button onClick={() => setTempsJavascript(new Date().getTime())}>Mettre à jour</button>
          </div>
     )
}

export default DisplayTime;
