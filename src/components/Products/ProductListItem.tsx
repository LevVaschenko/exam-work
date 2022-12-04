import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    id: number
    name: string
    description: String
    price: number
    addProductToCart: (count: number, price: number) => void
}

const ProductListItem = ({
    id,
    name,
    description,
    price,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 0)

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 0)

    return (
        <Card className="product">
            <CardContent>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-price">Price: {price}</div>

                <div className="product-quantity">
                    <TextField size="small" value={count} variant="outlined" />
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(count, price)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
