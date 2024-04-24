import { useEffect, useState } from 'react'
import { useImmer } from "use-immer";
import AppRouter from './AppRouter';
import './myStyles.scss'
import Modal from './components/Modal/Modal'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {
  const [data, setData] = useState([])
  const [card, setCard] = useState(null)
  const [modalAdding, setModalAdding] = useState(false)
  const [modalRemove, setModalRemove] = useState(false)
  const [cart, setCart] = useImmer(JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [favourite, setFavourite] = useImmer(JSON.parse(localStorage.getItem('favouriteItems')) ? JSON.parse(localStorage.getItem('favouriteItems')) : [])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch('../public/data.json').then(res => res.json())

        setData(result);
      }

      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favourite))
  }, [favourite])

  const toggleModal = () => {
    modalAdding ? setModalAdding(false) : setModalAdding(true);
  }

  const toggleModalRemove = () => {
    modalRemove ? setModalRemove(false) : setModalRemove(true);
  }

  const saveCard = (product) => {
    toggleModalRemove();
    setCard(product.target.dataset.id);
  }

  const saveCardToCart = (product) => {
    toggleModal();
    setCard(product.target.dataset.id);
  }

  const removeFromCart = () => {
    toggleModalRemove();
    setCart(prevCart => prevCart.filter(item => item !== card));
  }

  const removeFromFavourite = (product) => {
    setFavourite(prevCart => prevCart.filter(item => item !== product.target.id));
  }

  const addToCart = () => {
    toggleModal();
    setCart((draft => {
      draft.push(card);
    }))
  }

  const addToFavourite = (product) => {
    setFavourite((draft => {
      draft.push(product.target.id);
    }))
  }

  return (
    <>
      <Header
        counter={cart.length}
        favourite={favourite.length}
      />
      <AppRouter
        data={data} addToCart={saveCardToCart} cart={cart} removeFromCart={saveCard} addToFavourite={addToFavourite} removeFromFavourite={removeFromFavourite} favourite={favourite}
      ></AppRouter>

      <Footer />
      {modalAdding && (
        <Modal 
          onClick={addToCart}
          onCancel={toggleModal}
          text='Add to Cart'
          secondText='Do you really want to add this Product?'
        />
      )}
      {modalRemove && (
        <Modal 
          onClick={removeFromCart}
          onCancel={toggleModalRemove}
          text='Remove from Cart'
          secondText='Do you really want to remove this Product?'
        />
      )}
    </>
  )
}

export default App