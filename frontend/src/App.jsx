import { CartProvider } from './cart/CartContext';
import Master from './components/Master';

const App = () => (
    <CartProvider>
        <Master />
    </CartProvider>
);

export default App;
