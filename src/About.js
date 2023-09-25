import { Component } from "react";
import './About.css';


export class About extends Component
{
    state={}
    render()
    {
        return (
            <div className="container about">
               <div className="row">
               <div className="col-4 d-flex align-items-center">
                    <h1 className="">About Me</h1>
                </div>
                <div className="col-8">
                    <p className="pt-5"> 
                      lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to containing
                      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets Ipsum 
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                    </p>
                    <br/><br/>
                    <botton className='p-2 pe-3 ps-3 mt-4 text-light bg-black btnAbout' >download portofolio </botton>
                </div>
               </div>
            </div>
        )
    }
}