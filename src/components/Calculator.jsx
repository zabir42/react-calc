import { useState } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {

    const [input,setInput] = useState('')
    const handleInput = (value) => {
        setInput(input + value)
    }

    const handleClear = ()=> {
        setInput(input.slice(0,-1))
    }

    const handleAllClear = ()=> {
        setInput('')
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        try {
            const result = eval(input)
            setInput(result.toString())
        } catch (error) {
            setInput('input valid something')
        }

    }


    return (
        <div className="calculator">
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} readOnly />
                <div className="buttons">
                    <div className="row">
                        <button type="button" onClick={()=> handleInput(7)} >
                            7
                        </button>
                        <button type="button" onClick={() => handleInput(8)} >
                            8
                        </button>
                        <button type="button" onClick={() => handleInput(9)} >
                            9
                        </button>
                        <button type="button" onClick={() => handleInput('/')} >
                            /
                        </button>
                    </div>
                    <div className="row">
                        <button type="button" onClick={() => handleInput(4)} >
                            4
                        </button>
                        <button type="button" onClick={() => handleInput(5)} >
                            5
                        </button>
                        <button type="button" onClick={() => handleInput(6)}>
                            6
                        </button>
                        <button type="button" onClick={() => handleInput('*')} >
                            *
                        </button>
                    </div>
                    <div className="row">
                        <button type="button" onClick={() => handleInput(1)} >
                            1
                        </button>
                        <button type="button" onClick={() => handleInput(2)}>
                            2
                        </button>
                        <button type="button" onClick={() => handleInput(3)}>
                            3
                        </button>
                        <button type="button" onClick={() => handleInput('-')}>
                            -
                        </button>
                    </div>
                    <div className="row">
                        <button type="button" onClick={() => handleInput(0)}>
                            0
                        </button>
                        <button type="button" onClick={() => handleInput('.')}>
                            .
                        </button>
                        <button type="submit">=</button>
                        <button type="button" onClick={() => handleInput('+')}>
                            +
                        </button>
                    </div>
                    <div className="row">
                        <button type="button" onClick={handleClear}  >
                            &lt;
                        </button>
                        <button type="button" onClick={() => handleInput('%')}>
                            %
                        </button>
                        <button type="button" onClick={handleAllClear} >
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Calculator;
