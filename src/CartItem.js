import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function CartItem({ id, item }) {


    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('cartItems').doc(id).delete();

    }

    let options = []

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i} </option>)
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name} </h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemInfoBottomQuantity>
                        <select value={item.quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>

                    </CartItemInfoBottomQuantity>
                    <CartItemInfoBottomDelete onClick = {deleteItem}>
                        Delete
                    </CartItemInfoBottomDelete>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ${item.price}
            </CartItemPrice>

        </Container>
    )
}

export default CartItem

const Container = styled.div`
padding-top: 12px;
padding-bottom: 12px;
display: flex;
border-bottom: 1px solid  gray;
`
const ImageContainer = styled.div`
height: 180px;
width: 180px;
flex-shrink: 0;
flex-grow: 0;
margin-right: 16px;
img {
    object-fit: contain;
    height: 100%;
    width: 100%;

}
`
const CartItemInfo = styled.div`
flex-grow: 1;
`
const CartItemInfoTop = styled.div`
color: darkgreen;
h2 {
    font-size: 18px;
}
`
const CartItemInfoBottom = styled.div`
display:flex;
margin-top: 4px;
align-items: center;
`
const CartItemInfoBottomQuantity = styled.div`
select {
    border-radius: 6px;
    padding: 8px;
    background-color: lightyellow;
    box-shadow: 0 2px 5px rgba(15,17,17,.15);

    :focus {
        outline: none;
    }
}
`
const CartItemInfoBottomDelete = styled.div`
cursor: pointer;
margin-left: 16px;
color: gray;

`
const CartItemPrice = styled.div`
font-size: 18px;
font-weight: 700;
margin-left: 14px;
`
