import { Component } from "react";
import './Home.css';


export class Home extends Component
{
    state={
        pName : 'skills'

    }
    render()
    {
      return(
        <div className="container home">
                <div className="aboutSection row p-5 ">
                    <div className="col-4">
                       <div className="d-flex flex-column align-items-center text-light mt-5"> 
                        <h1>Safya Ibrahem</h1>
                        <h3>frond end developer</h3>
                        <button className="bg-black text-light p-1 border-white pe-3 ps-3 mt-4">contact me</button>
                       </div>
                    </div>
                </div>
               
            </div>
        // <div>
        //     <p>product name : {this.state.pName}</p>
        // </div>
      )
    }
}