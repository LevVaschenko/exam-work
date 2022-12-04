import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from 'components/Products/ProductListItem'
import productsArray from './productsArray'

type ProductProps = {
    id: number
    name: string
    description: string
    price: number
}

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const ProductsListEUR = ({ addProductToCart }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ id, name, description, price }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                price={price}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsListEUR
