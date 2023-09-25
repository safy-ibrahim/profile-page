import { Component } from "react";
import Card from './resubleComponent/Card';

export class Portfolio extends Component{
    state={}
    render()
    {
        return(
            <div className="container">
                 <div className="row">
            
                    <h2 className='text-start container mt-5 '>Portfolio</h2>  
                    <div className='col-12 portfolio p-3 d-flex flex-wrap justify-content-center' >
                      <Card bg={"gray"}/>
                      <Card bg={"rgb(214, 213, 213)"}/>
                      <Card bg={"gray"}/>
                       <Card bg={"rgb(214, 213, 213)"}/>
                      <Card bg={"gray"}/>
                      <Card bg={"rgb(214, 213, 213)"}/>
                    </div>
           </div>
        </div>
        )
    }
}