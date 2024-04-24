export default function ProductCard( {data, imageUrl, price, name, product, sku, cart, addToCart, removeFromCart, addToFavourite, favourite, removeFromFavourite }) {
    const notAdded = !data.includes(sku);
    const isFavourite = favourite.includes(sku);

    return (
        <>
            {isFavourite && (
                <div className="card-wrapper">
                    {!isFavourite ? (
                        <img src="../../../public/card-star.svg" alt="card-star" className="card-star" onClick={addToFavourite} id={sku} />
                    ) : (
                        <img src="../../../public/yellow-star.svg" alt="card-star" className="card-star" onClick={removeFromFavourite} id={sku} />
                    )}
                    <img src={imageUrl} alt="image" className="card-img" />
                    <div className="card-description">
                        <p className="card-name">{name}</p>
                        <p className="card-price">${price}</p>
                    </div>
                        <div className="card-btn">
                    </div>
                </div>
            )}
        </>
    )
}