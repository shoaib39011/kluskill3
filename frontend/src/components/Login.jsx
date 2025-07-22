//useRef hook, used to read the data from input
import { useRef } from "react";
//navigation between components based on events
import { useNavigate } from "react-router-dom";
//import axios
//axios used to make api calls
import axios from "axios";
const Login = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();
    
    const login_fn = async ()=>{
        const res = await axios.post(`http://localhost:8080/login`,{"username":ref1.current.value,"password":ref2.current.value});
        const {data} = res;
        const {login} = data;
        login == "success" ? navigate("/dashboard") : navigate("/error");
        
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN FORM</legend>
                <input type="text" ref={ref1} placeholder="enter user name"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login_fn}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;