import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal( {getCount, getTotalPrice} ) {

   
    return (
        <Container>
                <SubTotal>Subtotal ({getCount} items): 
                <NumberFormat value={getTotalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                 </SubTotal>
                <CheckoutButton>
                    Proceed to Checkout
                </CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
background-color: lightgray;
flex: 0.3;
padding: 20px;
`

const SubTotal = styled.h2`
margin-bottom: 16px;`

const CheckoutButton = styled.button`
background-color: orange;
width: 100%;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;
:hover {
    background-color: darkorange;
}
font-size: 16px;
`