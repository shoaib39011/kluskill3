// MainLayout.js

import CartIcon from './CartIcon';

const MainLayout = ({ children }) => {
    return (
        <div>
            <CartIcon />
            {children}
        </div>
    );
};

export default MainLayout;
