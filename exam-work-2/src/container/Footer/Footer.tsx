import CartFooter from 'components/Cart/CartFooter'
import ProductList from 'components/Products/ProductList'
import React from 'react'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Footer = ({ cartData }: Props) => {
    return (
        <div>
            <CartFooter
                totalCount={cartData.totalCount}
                totalPrice={cartData.totalPrice}
            />
        </div>
    )
}

export default Footer
