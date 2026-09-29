import { useState } from "react";

function Project1() {
    const [display, setDisplay] = useState("");

    function handleClick(value) {
        setDisplay(display + value);
    }

    function calculate() {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay("Error");
        }
    }

    function clearDisplay() {
        setDisplay("");
    }

    return (
        <div>
            <div className="calculator">
                <h2>Simple Calculator</h2>

            <input type="text" value={display} readOnly />

            <br /><br />

            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("/")}>÷</button>

            <br />

            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("*")}>×</button>

            <br />

            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("-")}>−</button>

            <br />

            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => handleClick("+")}>+</button>

            <br /><br />

            <button onClick={clearDisplay}>Clear</button>
            </div>
        </div>
    );
}

export default Project1;
