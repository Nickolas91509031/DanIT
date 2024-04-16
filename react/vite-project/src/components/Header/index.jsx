import './Header.scss'

export default function Header({ counter, favourite }) {
    return (
        <div className="header-box">
            <div className="navigation">
                <a href='/' className="logo">DreamShop</a>
            </div>
            <div className="header-aside">
                <div className='header-cart-wrapper'>
                    <span className="header-cart-counter">{favourite}</span>
                    <img className='header-choosed' src="../../../public/star.png" alt="choosed" />
                </div>
                <div className='header-cart-wrapper'>
                    <span className="header-cart-counter">{counter}</span>
                    <img className='header-cart' src="../../../public/cart.png" alt="cart" />
                </div>
            </div>
        </div>
    )
}