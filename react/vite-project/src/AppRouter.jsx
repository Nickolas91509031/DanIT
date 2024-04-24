import { Routes, Route } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import CartRoute from './routes/CartRoute';
import FavouriteRoute from './routes/FavouriteRoute';

const AppRouter = ({ data, addToCart = () => {}, cart, removeFromCart = () => {}, addToFavourite, favourite, removeFromFavourite }) => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute
                data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite} removeFromFavourite={removeFromFavourite}
            />} />
            <Route path="/cart" element={<CartRoute
                data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite}
            />} />
            <Route path="/favourite" element={<FavouriteRoute
                data={data} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite} removeFromFavourite={removeFromFavourite}
            />} />
        </Routes>
    )
    }

export default AppRouter;
