import { Component } from "react";
import './footer.css'
//import { faLinkedin,faSquareFacebook,faSquareXTwitter} from '@fortawesome/fontawesome-free/svgs/brands/';

export class Footer extends Component{
    state={}
    render ()
    {
        return(
            <footer>
                <div className="container bg-dark text-light p-3">
                    <div className="row">
                        <div className="col-4 d-flex flex-column align-items-start ps-5">
                           <h5 className="text-light mt-5">GET IN TOUCH</h5>
                           <span className=" mt-4">
                             safy.ibrahim.17@gmail.com
                           </span>
                           <span className=" mt-2">+20 1032150529</span>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button className="bg-dark text-light ps-5 pe-5 pt-2 pb-2">Contact Us</button>
                        </div>
                        <div className="col-4 d-flix align-items-end">
                            {/* <div className="d-flex flex-column align-items-end gap-3">
                               <span className='iconsStyle' icon={faLinkedin} > </span>
                               <span className='iconsStyle' icon={faSquareFacebook} ></span>
                               <span className='iconsStyle' icon={faSquareXTwitter} ></span>
                            </div> */}
                            <br/> <br/> <br/> <br/> <br/>
                            {/* <h6 className="text-white-50 ms-5">Copyright 2023 SI</h6> */}
                            <span class="copyright quick-links text-white-50">
                                Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                            </span>
                            
                           
                        </div>
                    </div>
                
                </div>
            </footer>
            
        )
    }
}