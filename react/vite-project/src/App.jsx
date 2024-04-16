import { useEffect, useState } from 'react'
import { Routes } from 'react-router-dom'
import { useImmer } from "use-immer";
import './myStyles.scss'
import Modal from './components/Modal/Modal'
import Header from './components/Header/index'
import CardsList from './components/Cards/CardsList'
import Footer from './components/Footer/index'

function App() {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const [isWhite, setIsWhite] = useState(true)
  // const [cart, setCart] = useImmer([])
  // const [favourite, setFavourite] = useImmer([])
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
    modal ? setModal(false) : setModal(true);
  }

  const removeFromCart = () => {
    setCart((draft => {
      draft.slice(product.target.dataset.id);
    }))
  }

  const addToCart = (product) => {
    toggleModal();
    setCart((draft => {
      draft.push(product.target.dataset.id);
    }))
  }

  const addToFavourite = (product) => {
    setFavourite((draft => {
      draft.push(product.target.id);
    }))
    console.log(product.target.id)
  }

  return (
    <>
      <Header
        counter={cart.length}
        favourite={favourite.length}
      />
      {data && (
        <CardsList data={data} addToCart={addToCart} isWhite={isWhite} cart={cart} removeFromCart={removeFromCart} addToFavourite={addToFavourite} favourite={favourite}>
        </CardsList>
      )}
      <Footer />
      {modal && (
        <Modal 
          onClick={toggleModal}
          text='Add to Cart'
        />
      )}
    </>
  )
}

export default App