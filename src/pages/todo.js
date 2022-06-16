import React from 'react'
import {useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo' // containers中是容器组件
import VisibleTodoList from '../containers/VisibleTodoList'


function TODOLIST() {
    const [params ] = useSearchParams();
    // params 是对象， 有一个get方法
    let id = params.get('id');
    console.log(id);
    return (<div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>)
}

export default TODOLIST;