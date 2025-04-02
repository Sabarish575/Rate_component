import React,{useState} from "react";
import star from "../assets/images/icon-star.svg";
import "../Style/Rate.css";

import { useNavigate } from "react-router-dom";

function Rate() {

    const navigate=useNavigate();

    const[rate,setRate]=useState({
        0:false,
        1:false,
        2:false,
        3:false,
        4:false
    });

    const[selectedRating,setSelectedRating]=useState(null)

    function handleStyle(value){

        setRate((prevState)=>({
            0:false,
            1:false,
            2:false,
            3:false,
            4:false,
            [value]:!prevState[value]})
        )
        setSelectedRating(value+1);
    }

    function handleClick() {
        navigate("/greet" , {state:{ans:selectedRating}});
        
    }
    
    return(
        <>
        <div className="outer-cont">
            <div className="img-cont">
                <img src={star}/>
            </div>

            <div className="QandA">
                <h2>How did we do?</h2>
                <p>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
                </p>
            </div>

            <div className="group"> 
                <button  className={rate[0]?
                    "selected":
                    ""}
                    onClick={()=>handleStyle(0)}>
                    1
                </button>
                <button className={rate[1]?
                    "selected":
                    ""}
                    onClick={()=>handleStyle(1)}>
                    2
                </button>
                <button className={rate[2]?
                    "selected":
                    ""}
                    onClick={()=>handleStyle(2)}>
                    3
                </button>
                <button className={rate[3]?
                    "selected":
                    ""}
                    onClick={()=>handleStyle(3)}>
                    4
                </button>
                <button className={rate[4]?
                    "selected":
                    ""}
                    onClick={()=>handleStyle(4)}>
                    5
                </button>
            </div>

            <button type="submit" onClick={handleClick} className="btn">SUBMIT</button>
        </div>
        </>
    )
}

export default Rate;