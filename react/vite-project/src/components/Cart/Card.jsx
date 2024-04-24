import Button from '../Button'
import './Cart.scss'

export default function ProductCard( {data, imageUrl, price, name, product, sku, cart, addToCart, removeFromCart, addToFavourite, favourite }) {
    const isInCart = data.includes(sku);

    return (
        <>
            {isInCart && (
                <div className="card-wrapper">
                    <div className="close-cross" data-id={sku} onClick={removeFromCart}>&#x2715;</div>
                    <img src={imageUrl} alt="image" className="card-img" />
                    <div className="card-description">
                        <p className="card-name">{name}</p>
                        <p className="card-price">${price}</p>
                    </div>
                    <div className="card-btn">
                        <Button
                            className='btn-white'
                            onClick={removeFromCart}
                            id={sku}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}