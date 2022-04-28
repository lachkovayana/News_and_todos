import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createTodoListThunkCreator } from '../reducers/todo/actions'

let nameRef = React.createRef()

export default function ListCreationComp () {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(createTodoListThunkCreator(nameRef.current.value))
  }

  return (
    <Form onSubmit={handleClick}>
      <Card>
        <Card.Header>
          <span className='text-uppercase'>Создать список ToDo </span>
        </Card.Header>
        <Card.Body>
          <Form.Group className='mb-3'>
            <Form.Label>Название</Form.Label>
            <Form.Control
              ref={nameRef}
              type='text'
              required
            ></Form.Control>
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant='secondary' type='reset'>
            Очистить
          </Button>
          <Button variant='success' type='submit' style={{ marginLeft: 8 }}>
            Создать
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  )
}
