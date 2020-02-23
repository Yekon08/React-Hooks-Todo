import React, { useState } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import styled from 'styled-components'

// CSS-In-JS 
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #209cee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

const TodoList = styled.div`
  background: #fefefe;
  padding: 5%;
  width: 30%;
  height: auto;
`

function App() {
  const [todos, setTodos] = useState([
    {
    text: '1',
    isCompleted: false
    },
    {
    text: '2',
    isCompleted: false
    },
    {
    text: '3',
    isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = i => {
    const newTodos = [...todos]
    newTodos[i].isCompleted = true
    setTodos(newTodos)
  }
  
  const removeTodo = i => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos(newTodos)
  }

  return (
    <AppContainer>
      <TodoList>
        {todos.map((todo, i) => {
          return <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        })}
        <TodoForm addTodo={addTodo} />
      </TodoList>
    </AppContainer>
  );
}

export default App;
