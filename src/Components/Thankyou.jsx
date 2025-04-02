import "../Style/Thankyou.css";
import img2 from "../assets/images/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";

function Thankyou() {

    const locate=useLocation();
    const data=locate.state?.ans||{};

    return(
        <>
        <div className="outer-conts">
            <div className="img-conts">
                <img src={img2}/>
            </div>

            <div className="Result">

                <p>You selected {data} out of 5</p>

            </div>

            <div className="result-cont">
                <h1>Thank You!</h1>
                <p>  We appreciate you taking the time to give a rating.
                    If you ever need more support, 
                don’t hesitate to 
                get in touch!</p>
            </div>

        </div>
        </>
    )
}

export default Thankyou;