
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { db, auth } from './firebase'


function App() {

  // const [cartItems, setCartItems] = useState([])

  // const getCartItems = () => {
  //   db.collection('cartItems').onSnapshot((snapshot) => {

  //     const tempItems = snapshot.docs.map((doc) => (
  //       {
  //         id: doc.id,
  //         product: doc.data()
  //       }
  //     )
  //     );

  //     setCartItems(tempItems);
  //   })

  // }

  // useEffect(() => {
  //   getCartItems()
  // }, [])

  // console.log(cartItems);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const [cartItems, setCartItems] = useState([])

  const getcartItems = () => {
      db.collection('cartItems').onSnapshot((snapshot) => {
          let tempItems = []

          tempItems = snapshot.docs.map((doc) => (
              {
                  id: doc.id,
                  product: doc.data()
              })
          );
          
          setCartItems(tempItems);
         
      }
      )

  }

  const signOut = () => {
      auth.signOut().then(() => {
        localStorage.removeItem('user')
        setUser(null)
      })
  }

  useEffect(() => {
      getcartItems()
  }, []
  )
  

  return (
    <Router>
      {
        !user ? (<Login setUser = {setUser}/>) : (
      
      <Container>
        <Header 
        signOut= { signOut }
        user = {user} 
        cartItems = {  cartItems }/>
        <Switch>
         
          <Route path="/cart">
            <Cart cartItems = { cartItems } />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div``
