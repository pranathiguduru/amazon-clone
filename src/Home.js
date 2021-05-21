import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'

function Home() {

    const [product, setProduct] = useState([])

    const getProduct = () => {
        db.collection('product').onSnapshot((snapshot) => {
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                })
            );
            
            setProduct(tempProducts);
        }
        )

    }

    useEffect(() => {
        getProduct()
    }, []
    )

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    product.map((data) => (
                        <Product
                            name={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    )

                    )
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 1500px;
margin: 0 auto;
`
const Banner = styled.div`
background-image: url('https://i.imgur.com/SYHeuYM.jpeg');
min-height: 600px;
background-position: center;
background-size: cover;

-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`

padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
display: flex;

`