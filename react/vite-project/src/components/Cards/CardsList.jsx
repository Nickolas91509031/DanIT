import './Cards.scss'
import ProductCard from './ProductCard'


export default function CardsList({ data, isWhite, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite }) {
    return (
        <div className="cards-wrapper">
            {
                data.map((product) => {
                    return (
                        <ProductCard 
                            key={product.sku}
                            data={cart}
                            addToCart={addToCart}
                            product={product}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            sku={product.sku}
                            isWhite={isWhite}
                            removeFromCart={removeFromCart}
                            addToFavourite={addToFavourite}
                            favourite={favourite}
                        />
                    )
                })
            }
        </div>
    )
}