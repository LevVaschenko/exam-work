import React from 'react'
import './Main.scss'
import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="currencies">
                <MenuItem to="/usd">
                    <button className="currency">USD</button>
                </MenuItem>
                <MenuItem to="/eur">
                    <button className="currency">EUR</button>
                </MenuItem>
                <MenuItem to="/uah">
                    <button className="currency">UAH</button>
                </MenuItem>
                <MenuItem to="/pln">
                    <button className="currency">PLN</button>
                </MenuItem>
            </div>
        </>
    )
}

export default Menu
