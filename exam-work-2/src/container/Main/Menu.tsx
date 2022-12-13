import React, { FC } from 'react'
import './Main.scss'
import MenuItem from './MenuItem'

type Props = {
  onChange: (value: 'USD' | 'EUR' | 'UAH' | 'PLN') => void
}

const Menu: FC<Props> = ({ onChange }) => {
    return (
        <>
            <div className="currencies">
              <button className="currency" onClick={() => onChange('USD')}>USD</button>
              <button className="currency" onClick={() => onChange('EUR')}>EUR</button>
              <button className="currency" onClick={() => onChange('UAH')}>UAH</button>
              <button className="currency" onClick={() => onChange('PLN')}>PLN</button>
            </div>
        </>
    )
}

export default Menu
