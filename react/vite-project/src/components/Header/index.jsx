import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header({ counter, favourite }) {
    return (
        <div className="header-box">
            <div className="navigation">
                <NavLink end to='/' className="logo">DreamShop</NavLink>
            </div>
            <div className="header-aside">
                <NavLink end to='/favourite' className='header-cart-wrapper'>
                    <span className="header-cart-counter">{favourite}</span>
                    <img className='header-choosed' src="../../../public/star.png" alt="choosed" />
                </NavLink>
                <NavLink end to='/cart' className='header-cart-wrapper'>
                    <span className="header-cart-counter">{counter}</span>
                    <img className='header-cart' src="../../../public/cart.png" alt="cart" />
                </NavLink>
            </div>
        </div>
    )
}