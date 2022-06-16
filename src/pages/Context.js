import React, {createContext, useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Context = createContext();

function ComA () {
    const count = useContext(Context);
    return (<div>
        <div>这是A组件 count： {count}</div>
        <ComC/>
    </div>)
}

function ComC () {
    const count = useContext(Context);
    return (
        <div>这是C组件  count：{count}</div>
    )
}
function ContextTest() {
    const [count, setCount ] = useState(0);
    const navigate = useNavigate();
    const params = useParams();
    let id = params.id;
    function go() {
        navigate('/todo?id=1001')
    }
    return (
    <Context.Provider value={count}>
        <div>
            <button onClick={() => {setCount(count+1)}}>点击+1</button>
            <button onClick={ go}>跳转至todo</button>
            <div>路由参数：{id}</div>
            <ComA />
        </div>
    </Context.Provider>
    )
}

export default ContextTest;