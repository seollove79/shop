import { useState } from "react"
import { useNavigate } from "react-router-dom";
import data from "./data"

function Card(props) {
    let navigate = useNavigate();
    let shoes = props.shoes;
    return (
        <div className="col-md-4" onClick={()=>{
            navigate("/detail/" + shoes[props.index].id);
        }}>
            <img alt="신발이미지" src={shoes[props.index].picture} width="80%" />
            <h4>{shoes[props.index].title}</h4>
            <p>{shoes[props.index].content}</p>
            <p>{shoes[props.index].price}</p>
        </div>
    )
}

export default Card