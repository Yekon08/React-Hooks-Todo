import React from 'react'
import styled from 'styled-components'

const Todos = styled.div`
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    padding: 3%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    text-decoration: ${props => props.complete ? 'line-through' : ''};
` 

const ButtonTodo = styled.button`
    padding: 3%;
    text-transform: uppercase;
    border: none;
    background: ${props => props.primary ? "#64b5f6" : "#e57373"};
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Roboto';

    &:nth-last-child(1) {
        margin-left: 10px;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`

function Todo(props) {
    return (
        <Todos complete={props.todo.isCompleted}>
            { props.todo.text }
            <Flex>
                <ButtonTodo primary onClick={() => props.completeTodo(props.index)}>Complete</ButtonTodo>
                <ButtonTodo onClick={() => props.removeTodo(props.index)}>Delete</ButtonTodo>
            </Flex>
        </Todos>
    )
}

export default Todo