import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import CartIcon from "../cart/CartIcon";
const Dashboard = ()=>{
    return(
        <>
            <CartIcon />
            <Link to="dashboard/laptops">Laptops</Link>
            <Link to="dashboard/mobiles">Mobiles</Link>
            <Link to="dashboard/headphones">Headphones</Link>
            <br></br><br></br>

            <Outlet></Outlet>
            
        </>
    )
}
export default Dashboard;