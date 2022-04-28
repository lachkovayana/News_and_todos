import React, { useEffect } from 'react'
import LegendComp from '../LegendComp'
import ListCreationComp from '../ListCreationFormComp'
import ElemCreationComp from '../ELemCreationFormComp'
import { Container } from 'react-bootstrap'
import ToDoListWrapper from '../ToDoListWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { loadTODOThunkCreator } from '../../reducers/todo/actions'

export default function ToDoComponent () {
  const { todo } = useSelector(state => state.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTODOThunkCreator())
  }, [dispatch])

  return (
    <Container className='w-75 flex-shrink-0 flex-grow-1'>
      <LegendComp />
      <ListCreationComp />
      <ElemCreationComp />
      <ToDoListWrapper lists={todo} />
    </Container>
  )
}
