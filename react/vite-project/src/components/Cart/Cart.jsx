import './Cart'
import Card from './Card'

export default function CardsList({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite }) {
    return (
        <div className="cards-wrapper">
            {
                data.map((product) => {
                    return (
                        <Card 
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
                        />
                    )
                })
            }
        </div>
    )
}