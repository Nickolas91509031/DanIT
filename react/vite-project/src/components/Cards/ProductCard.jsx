import Button from '../Button'
import './Cards.scss'

export default function ProductCard( {data, isWhite, imageUrl, price, name, product, sku, cart, addToCart, removeFromCart, addToFavourite, favourite }) {
    const notAdded = !data.includes(sku);
    const isFavourite = favourite.includes(sku);

    return (
        <div className="card-wrapper">
            {!isFavourite ? (
                <img src="../../../public/card-star.svg" alt="card-star" className="card-star" onClick={addToFavourite} id={sku} />
            ) : (
                <img src="../../../public/yellow-star.svg" alt="card-star" className="card-star" onClick={addToFavourite} id={sku} />
            )}
            <img src={imageUrl} alt="image" className="card-img" />
            <div className="card-description">
                <p className="card-name">{name}</p>
                <p className="card-price">${price}</p>
            </div>
            <div className="card-btn">
                {notAdded ? (
                    <Button
                        className='purple-btn'
                        onClick={addToCart}
                        id={sku}
                    >
                        Add to Cart
                    </Button>
                    ) : (
                        <Button
                        className='white-btn'
                        onClick={removeFromCart}
                        id={sku}
                    >
                        Remove from Cart
                    </Button>
                    )}
            </div>
        </div>
    )
}