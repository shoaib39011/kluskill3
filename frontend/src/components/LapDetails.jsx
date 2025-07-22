import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./LaptopDetails.css";
import { useCart } from '../cart/CartContext';
const LapDetails = ()=>{
    const {pid} = useParams();
    const [laptop,setLaptop] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const { addToCart } = useCart();

    const get_laptop = async ()=>{
        const res = await axios.get(`http://localhost:8080/laptops/?pid=${pid}`);
        const {data} = res;
        setLaptop(data);
        setQuantity(1);
    }

    useEffect(()=>{
        get_laptop();
    },[pid]);

    const handleDecrement = ()=>{
        if(quantity>1){
            setQuantity(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(quantity<laptop.pqty){
            setQuantity(prevQuentity => prevQuentity+1);
        }
    }


    const handleAddToCart = () => {
        addToCart(laptop, quantity);
    };

    
    if(!laptop) return (<div>Loading....</div>)
    
    return(
        <>
            <div className="laptop-details">
                <img src={laptop.pimage}></img>
                <h1>{laptop.pname}</h1>
                <h2><i className="fa fa-rupee"></i> {laptop.pcost}</h2>
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
export default LapDetails;