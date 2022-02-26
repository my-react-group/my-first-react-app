import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo' // containers中是容器组件
import VisibleTodoList from '../containers/VisibleTodoList'


function TODOLIST() {

    return (<div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>)
}

export default TODOLIST;