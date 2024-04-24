import './Favourite.scss'
import FavouriteCard from './FavouriteCard'

export default function CardsList({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) {
    return (
        <div className="cards-wrapper">
            {
                data.map((product) => {
                    return (
                        <FavouriteCard 
                            key={product.sku}
                            data={cart}
                            addToCart={addToCart}
                            product={product}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            sku={product.sku}
                            removeFromCart={removeFromCart}
                            addToFavourite={addToFavourite}
                            favourite={favourite}
                            removeFromFavourite={removeFromFavourite}
                        />
                    )
                })
            }
        </div>
    )
}