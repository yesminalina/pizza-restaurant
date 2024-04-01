import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([])

  const getPizzas = async () => {
    try {
      const response = await fetch('/pizzas.json')
      const data = await response.json()
      setPizzas(data)
    } catch (e) {
      console.log(e)
    }
  }

  const notify = () => {
    toast.success('Producto agregado al carrito!', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  const addToCart = (pizza) => {
    const itemInCart = cart.find((item) => item.id === pizza.id)
    if (itemInCart) {
      notify()
      setCart(cart.map((item) => {
        return item.id === pizza.id ? { ...item, qty: item.qty + 1 } : item
      }))
    } else {
      notify()
      setCart([...cart, { id: pizza.id, img: pizza.img, name: pizza.name, price: pizza.price, qty: 1 }])
    }
  }

  const removeFromCart = (pizza) => {
    const newCart = [...cart]
    const index = newCart.findIndex((item) => item.id === pizza.id)
    if (newCart[index].qty > 1) {
      newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 }
      setCart(newCart)
    } else {
      setCart(newCart.filter((item) => item.id !== pizza.id))
    }
  }

  const removeAllFromCart = () => {
    setCart([])
  }

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => (acc + (item.price * item.qty)), 0))
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, getPizzas, addToCart, removeFromCart, removeAllFromCart, cart, total, getTotal }}>
      {children}
    </PizzaContext.Provider>
  )
}
export default PizzaProvider
