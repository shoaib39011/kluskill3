import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./LaptopDetails.css";
import { useCart } from '../cart/CartContext';
const MobDetails = ()=>{
    const {pid} = useParams();
    const [mobile,setMobile] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const { addToCart } = useCart();
    const get_mobiles = async ()=>{
        const res = await axios.get(`http://localhost:8080/mobiles/?pid=${pid}`);
        const {data} = res;
        setMobile(data);
        setQuantity(1);
    }

    useEffect(()=>{
        get_mobiles();
    },[pid]);

    const handleDecrement = ()=>{
        
        if(quantity>1){
            setQuantity(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(quantity<mobile.pqty){
            setQuantity(prevQuentity => prevQuentity+1);
        }
    }

    
    if(!mobile) return (<div>Loading....</div>)
    
    const handleAddToCart = () => {
        addToCart(mobile, quantity);
    };


    return(
        <>
            <div className="laptop-details">
                <img src={mobile.pimage}></img>
                <h1>{mobile.pname}</h1>
                <h2><i className="fa fa-rupee"></i> {mobile.pcost}</h2>
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
export default MobDetails;