import { typedAction } from '../helpers/helpers'

type Todo = {
  id: number;
  text: string;
}

// STATE

export interface TodoState {
  todos: Todo[]
  input: string
}

const initialState: TodoState = {
  todos: [],
  input: ""
}

// ACTION

let id = 0

export function create(text: string) {
  return typedAction('todo/CREATE', {
    id: id++,
    text: text
  })
}

export function remove(id: number) {
  return typedAction('todo/REMOVE', { id })
}

type TodoAction = ReturnType<typeof create | typeof remove>

// REDUCER

export default function reducer(
  state: TodoState,
  action: TodoAction
): TodoState {
  if (state === undefined) return initialState

  switch (action.type) {
    case 'todo/CREATE': {
      return {
        todos: [...state.todos, action.payload],
        input: ""
      }
    }

    case 'todo/REMOVE': {
      return {
        ...state,
        todos: state.todos.filter(i => i.id !== action.payload.id)
      }
    }

    default:
      return state
  }
}