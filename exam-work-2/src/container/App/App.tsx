import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Container } from '@mui/system'
import { StyledEngineProvider } from '@mui/material'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

type CartData = {
    totalCount: number
    totalPrice: number
}

function App() {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Main addProductToCart={addProductToCart} />
                    <Footer cartData={cartData} />
                </Container>
            </StyledEngineProvider>
        </>
    )
}

export default App
