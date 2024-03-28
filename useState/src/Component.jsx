import React, { useState } from 'react';
function Component() {

    let count = 0;

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updatename = () => {

        setName("John Doe");
    }

    const increamentAge = () => {
        if (age < 10) { setAge(age + 1); }

        else {
            setAge(age + 10);
        }
    }

    const toggleEmployedStatus = () => {
        setEmployed(!isEmployed);
    }

    const handleClick = (e) => {
        if (isEmployed === false) {
            e.target.textContent = "Not employed";
        }
        else {
            e.target.textContent = "Employed";
        }
    }

    const handleClick2 = (e) => {
        if (age >= 9) {
            e.target.textContent = "Increament Age by 10";
        }
    }



    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updatename} >Set name </button>

            <p>Age: {age}</p>
            <button onClickCapture={(e)=> handleClick2(e)} onClick={increamentAge}> Increament Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClickCapture={(e) => handleClick(e)} onClick={toggleEmployedStatus}>Employed</button>
        </div>
    );
}

export default Component;