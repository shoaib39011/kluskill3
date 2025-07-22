import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./LaptopDetails.css";
import { useCart } from '../cart/CartContext';
const HeadphoneDetails = ()=>{
    const {pid} = useParams();
    const [headphone,setHeadphone] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const { addToCart } = useCart();
    const get_headphones = async ()=>{
        const res = await axios.get(`http://localhost:8080/headphones/?pid=${pid}`);
        const {data} = res;
        setHeadphone(data);
        setQuantity(1);
    }

    useEffect(()=>{
        get_headphones();
    },[pid]);

    const handleDecrement = ()=>{
        
        if(quantity>1){
            setQuantity(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(quantity<headphone.pqty){
            setQuantity(prevQuentity => prevQuentity+1);
        }
    }

    
    if(!headphone) return (<div>Loading....</div>)
    
    const handleAddToCart = () => {
        addToCart(headphone, quantity);
    };


    return(
        <>
            <div className="laptop-details">
                <img src={headphone.pimage}></img>
                <h1>{headphone.pname}</h1>
                <h2><i className="fa fa-rupee"></i> {headphone.pcost}</h2>
                <div className="c1">
                    <button onClick={handleDecrement}> - </button> 
                        <p>{quantity}</p> 
                    <button onClick={handleIncrement}> + </button>
                </div>
                <button className="add_to_cart_btn" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </>
    )
}
export default HeadphoneDetails;












