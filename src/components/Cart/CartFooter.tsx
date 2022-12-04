import React from 'react'
import './Total.scss'

type Props = {
    totalCount: number
    totalPrice: number
}

const CartFooter = ({ totalCount, totalPrice }: Props) => {
    return (
        <div>
            <div className="totalPrice">Total: {totalPrice}</div>
        </div>
    )
}

export default CartFooter
