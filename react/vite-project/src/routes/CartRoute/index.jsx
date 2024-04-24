import Cart from '../../components/Cart/Cart'

export default function CartRoute ({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) {
    return (
        <>
            <Cart
                data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite} removeFromFavourite={removeFromFavourite}
            ></Cart>
        </>
    )
}