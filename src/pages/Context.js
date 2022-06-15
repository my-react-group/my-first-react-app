import React, {createContext, useContext, useState} from 'react'

const Context = createContext();

function ComA () {
    const count = useContext(Context);
    return (<div>
        <div>这是A{count}</div>
        <ComC/>
    </div>)
}

function ComC () {
    const count = useContext(Context);
    return (
        <div>这是C{count}</div>
    )
}
function ContextTest() {
    const [count, setCount ] = useState(0);
    return (
    <Context.Provider value={count}>
        <div>
            <button onClick={() => {setCount(count+1)}}>点击+1</button>
            <ComA />
        </div>
    </Context.Provider>
    )
}

export default ContextTest;