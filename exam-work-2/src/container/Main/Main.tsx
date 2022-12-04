import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ProductsListEUR from 'pages/EUR/ProductListEUR'
import Home from 'pages/Home/Home'
import ProductsListPLN from 'pages/PLN/ProductListPLN'
import ProductsListUAH from 'pages/UAH/ProductListUAH'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: [40],
                        marginTop: '50px',
                        marginBottom: '30px',
                    }}
                >
                    Our Shop Page
                </Typography>
                <Menu />
                <Routes>
                    <Route
                        path="/usd"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/eur"
                        element={<ProductsListEUR addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/uah"
                        element={<ProductsListUAH addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/pln"
                        element={<ProductsListPLN addProductToCart={addProductToCart} />}
                    />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
