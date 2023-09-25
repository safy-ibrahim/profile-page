import { Component } from "react";
import './Skills.css';
import'./resubleComponent/SkillsProg'
import SkillsProgs from "./resubleComponent/SkillsProg";

export class Skills extends Component {
    state={}
    render()
    {
        return(
            <div className="container skills pt-5">
                <div className="row">
                    <div className="col-12 text-center text-light">
                        <h2>Skills</h2>
                        <p className="p-5">
                         lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<br/>
                         dummy text ever since the 1500s, when an unknown printer took a galley of type and <br/>
                         dummy text ever since the 1500s, when an unknown printer took
                        </p>
                    </div>
                </div>
                <div className="row ps-5 pe-5">
                    <div className="col-5 text-center text-light" >
                        <h3>MY FOCUS</h3>
                        <div className="line"></div>
                        <ul className="mt-3">
                            <li className="list-group-item mt-2">UI/UX Design</li>
                            <li className="list-group-item mt-2">Responsive Design</li>
                            <li className="list-group-item mt-2">bootstrab</li>
                            <li className="list-group-item mt-2">web design</li>
                        </ul>
                    </div>
                    <div className="col-7 d-flex flex-wrap flex-column gap-3" >
                        <SkillsProgs width={"80%"} name={"html"} /> 
                        <SkillsProgs width={"75%"} name={"css"} />
                        <SkillsProgs width={"70%"} name={"js "} />
                        <SkillsProgs width={"80%"} name={"Es6"} />
                        <SkillsProgs width={"70%"} name={"Node js"} />
                        <SkillsProgs width={"50%"} name={"angular"} />
                        <SkillsProgs width={"80%"} name={"react"} />
                        

                        {/* <div className="progress ">
                          <div className="progress-bar bg-secondary ps-3 pe-3" role="progressbar" aria-valuenow="25" aria-valuemin="70" aria-valuemax="">HTML</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-secondary ps-4 pe-4" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Css</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-secondary ps-2 pe-2" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Javascript</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-secondary ps-2 pe-2" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar bg-secondary ps-3 pe-2" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">React JS</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar bg-secondary ps-3 pe-3" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Next JS</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar bg-secondary ps-3 pe-2" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Angular</div>
                        </div>
                        <div className="progress">
                           <div className="progress-bar bg-secondary ps-3 pe-3" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">vue js</div>
                        </div> */}
                    </div>

                </div>
            </div>
        )
        
    }
}