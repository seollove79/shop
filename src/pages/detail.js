import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function Detail(props) {
    let shoes = props.shoes;
    let {id} = useParams();
    let shoeData = shoes.find(e=>e.id==id);
    let [showInfo, setShowInfo] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{setShowInfo(false);}, 2000);
    })

    return(
        <>
        {showInfo ? <div className="alert alert-warning">2초안에 구매시 할인</div> : null}
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img alt="신발이미지" src={shoeData.picture} width="100%" />
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{shoeData.title}</h4>
                    <p>{shoeData.content}</p>
                    <p>{shoeData.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Detail