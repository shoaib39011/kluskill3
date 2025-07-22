const CartPage = ()=>{
    return(
        <>
            <h1>Invoice Soon....!</h1>
        </>
    )
}
export default CartPage;














// import { useCart } from './CartContext';
// const CartPage = () => {
//     const { cart, totalAmount } = useCart();

//     return (
//         <div>
//             <h1>Your Cart</h1>
//             {cart.map((item, index) => (
//                 <div key={index}>
//                     <h3>{item.pname}</h3>
//                     <p>Price: {item.pcost}</p>
//                     <p>Quantity: {item.quantity}</p>
//                 </div>
//             ))}
//             <h2>Total Amount: {totalAmount}</h2>
//         </div>
//     );
// };
// export default CartPage;
