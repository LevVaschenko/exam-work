import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './App.scss'

function App() {
    const [count1, setCount1] = useState<number>(1)
    const [count2, setCount2] = useState<number>(1)
    const [count3, setCount3] = useState<number>(1)

    const onIncrementClick1 = () =>
        setCount1((prevState: number) => prevState + 1)

    const onIncrementClick2 = () =>
        setCount2((prevState: number) => prevState + 1)

    const onIncrementClick3 = () =>
        setCount3((prevState: number) => prevState + 1)
    return (
        <>
            <div className="title">Перше завдання:</div>
            <div className="buttons">
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => onIncrementClick1()}
                    className="button"
                >
                    Change count
                    <TextField
                        size="small"
                        value={count1}
                        variant="outlined"
                        className="input"
                        id='r1'
                    />
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => onIncrementClick2()}
                    className="button"
                >
                    Change count
                    <TextField
                        size="small"
                        value={count2}
                        variant="outlined"
                        className="input"
                        id='r2'
                    />
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => onIncrementClick3()}
                    className="button"
                >
                    Change count
                    <TextField
                        size="small"
                        value={count3}
                        variant="outlined"
                        className="input"
                        id='r3'
                    />
                </Button>
            </div>
        </>
    )
}

export default App
