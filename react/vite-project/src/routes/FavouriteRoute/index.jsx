import Favourite from '../../components/Favourite/Favourite'


export default function FavouriteRoute ({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) {
    return (
        <>
            <Favourite
                data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite} removeFromFavourite={removeFromFavourite}
            ></Favourite>
        </>
    )
}