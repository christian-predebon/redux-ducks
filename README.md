# redux-ducks

Ready-to-use redux implementation based on [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux) proposal.

#### Consuming code

```tsx
// index.tsx

import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <h1>redux-ducks</h1>
  </Provider>
  , document.getElementById('app'))
```

```tsx
// todo.tsx

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from '../redux/helpers/helpers'
import { AppDispatch } from '../redux/store'
import * as actionCreator from '../redux/modules/todos'

export const TodoList: React.FC = () => {
  
  const dispatch: AppDispatch = useDispatch()
  const todos = useSelector(s => s.todos)

  const [todo, setTodo] = useState("")

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(actionCreator.create(todo))
    setToto("")
  }

  const removeTodo = (id: number) => 
    dispatch(actionCreator.remove(id))

  const body = 
    <div>
      <h1>Todo list</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={todo} placeholder="What needs to be done?" onChange={e => setToto(e.target.value)} />
        <br />

        <div>
          {todos.todos.map(todo => (
            <p key={todo.id} onClick={_ => removeTodo(todo.id)}>&#10003; {todo.text}</p>
          ))}
        </div>
      </form>
    </div>

  return body
}
```