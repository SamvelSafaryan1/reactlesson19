import { Route, Routes} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Layout from './Components/Layout/Layout'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import CardPage from './pages/CardPage/CardPage'
import ProductPage from './pages/ProductPage/ProductPage'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'

export const instance = axios.create({
  baseURL : 'https://fakestoreapi.com'
})

function App() {
  let [users, setUsers] = useState([
    {id : 1, name : "Aram", email : 'aram@gmail.com', password : '1234'},
    {id : 1, name : "Arman", email : 'arman@gmail.com', password : '1234'},
    {id : 1, name : "Gagik", email : 'gagik@gmail.com', password : '1234'},
    {id : 1, name : "Gor", email : 'gor@gmail.com', password : '1234'},
    {id : 1, name : "Levon", email : 'levon@gmail.com', password : '1234'}
  ])
  let [products, setProducts] = useState([])
  let [cards, setCards] = useState([])

  useEffect(() => {
    instance.get('/products')
      .then((res) =>  setProducts(res.data.map((prod) => {
        return {
          ...prod,
          count: 1,
          cardPrice: prod.price
        }
      })))
  }, [])

  const changePriceAndCount = (count, id) => {
    setCards(cards.map((card) => {
      if(card.id === id){
        return{
          ...card,
          count : count,
          cardPrice : card.price * count
        }
      }else{
        return card
      }
    }))
  }
  
  const del = (id) => {
    setCards(cards.filter((elem) => elem.id !== id))
  }

  const addToCard = (item) => {
    let boll = false

    cards.forEach((card) => {
      if (card.id === item.id){
        boll = true
        setCards(cards.map((el) => {
          if (el.id === item.id){
            return{
              ...el,
              count: ++el.count,
              cardPrice: el.cardPrice + el.price
            }
          } else{
            return el
          }
        }))
      }
    })
    if (!boll) {
      setCards((prev) => {
        return [...prev, item]
      })
    }
  }

  const claer = () => {
    setCards([])
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout cards={cards}/>}>
          <Route index element={<HomePage products={products} addToCard={addToCard} />} />
          <Route path='/login' element={<Login users={users}/> }/>
          <Route path='/card' element={<CardPage cards={cards} changePriceAndCount={changePriceAndCount} del={del} clear={claer}/>} />
          <Route path='/:id' element={<ProductPage /> }/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
