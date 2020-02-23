import React, { useState } from 'react'
import styled from 'styled-components'

const InputForm = styled.input`
    padding: 3%;
    text-transform: uppercase;
    border: none;
    background: transparent;
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Roboto';
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    width: 70%;
`

const FormTodo = styled.form `
    width: 100%;
    display: flex;
    justify-content: center;
`

function TodoForm(props) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return
        props.addTodo(value)
        setValue('')
    }

    return (
        <FormTodo onSubmit={handleSubmit}>
            <InputForm type='text' className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Todo... (enter to confirm)" />
        </FormTodo>
    )
}

export default TodoForm