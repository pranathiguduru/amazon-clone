import { Star } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Product({name,price,rating,image,id}) {

    const addToCart = () => {
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc);
            if(doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection('cartItems').doc(id).set({
                    name: name,
                    price: price,
                image: image,
                quantity: 1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {name}
            </Title>
            <Price>
               ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating => <p><Star/></p>)
                }
            </Rating>
            <Image src={image}/>
            <ActionSection>
                <AddToCartButton onClick={addToCart}>

                    Add to Cart
            </AddToCartButton>
            </ActionSection>
        </Container>
    ) 

}

export default Product

const Container = styled.div`
background-color: white;
z-index: 100;
flex: 1;
padding: 20px;
margin: 10px;
max-height: 400px;
display:flex;
flex-direction:column;
`

const Title = styled.span``
const Price = styled.span`
font-weight: 500;
`
const Rating = styled.div`
display: flex;
`
const Image = styled.img`
max-height: 200px;
object-fit: contain;`
const AddToCartButton = styled.button`
width: 100px;
height: 30px;
background-color: orange;
border: 2px solid black;
border-radius: 2px;
cursor: pointer;
`

const ActionSection = styled.div`
display: grid;
place-items: center;
margin-top: 10px;

`