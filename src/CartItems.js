import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'


function CartItems({ cartItems }) {
   
    return (
        <Container>
            <h1>Shopping Cart</h1>
            <hr />
            <ItemsContainer>
                {
                cartItems.map((item) => (
                    <CartItem
                        id = {item.id}
                        item = {item.product}
                    />
                ))
                }

            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
background-color: lightgray;
flex: 0.8;

margin-right: 18px;
padding: 20px;

`
const ItemsContainer = styled.div``

const h1 = styled.h1`
margin-bottom: 8px;
`