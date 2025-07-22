import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Laptops.css";
const Laptops = ()=>{
    
    const [laptops,setLaptops] = useState([]);

    const navigate = useNavigate();

    const get_laptops = async ()=>{
        const result = await axios.get(`http://localhost:8080/laptops`);
        const {data} = result;
        console.log(data);
        setLaptops(data);
    }
    
    useEffect(()=>{
        get_laptops();
    },[]);
    
    const fetch_details = (element)=>{
        navigate(`/dashboard/laptops/${element.pid}`) 
    }


    return(
        <>
            <div className="parent">
                {
                   laptops.map((element,index)=>{
                      return(<div className="child" key={index} onClick={()=> fetch_details(element)}>
                          <img src={element.pimage}></img>
                          <h5>{element.pname}</h5>
                          <h6>{element.pcost}</h6>
                      </div>
                    )}) 
                    
                }
            </div>
        </>
    )
}
export default Laptops;