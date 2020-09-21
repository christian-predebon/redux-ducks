import { useDispatch as useDispatch_, useSelector as useSelector_ } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import { StoreState } from '../modules/index'
import * as Redux from 'redux'

export const useDispatch: <Act extends Redux.Action> () => Dispatch<Act> = () => {
  const dispatch = useDispatch_()
  return dispatch
}

export const useSelector = <T>(
  getter: (_: StoreState) => T,
  equalityFn?: (left: T, right: T) => boolean) => {
  return useSelector_(getter, equalityFn)
}

// function that creates typed action. The type created by 
// this function will be a generic that extends string. The
// payload will be a generic that extends any.
export function typedAction<T extends string>(type: T): { type: T }
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P }
export function typedAction(type: string, payload?: any) {
  return { type, payload }
}
