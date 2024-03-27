import React, {useState} from 'react';
function Component () {


    const [name, setName] = useState();
    const updatename = () => {
        setName("John Doe");
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updatename} >Set name </button>
        </div>
    );
}

export default Component;