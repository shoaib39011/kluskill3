import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import "./CartIcon.css";
const CartIcon = () => {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link to="/cart">
            <div className="cart-icon">
                🛒
                <span className="cart-count">{totalItems}</span>
            </div>
        </Link>
    );
};

export default CartIcon;
