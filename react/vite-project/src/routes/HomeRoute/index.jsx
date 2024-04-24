import CardsList from "../../components/Cards/CardsList";

export default function HomeRoute ({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) {
    return (
        <>
            {data && (
                <CardsList removeFromFavourite={removeFromFavourite} data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite}>
                </CardsList>
            )}
        </>
    )
}