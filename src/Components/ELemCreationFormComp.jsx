import React from 'react'
import { Form, Card, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createTodoElementThunkCreator } from '../reducers/todo/actions'

export default function ELemCreationComp () {
  const dispatch = useDispatch()

  let nameRef = React.createRef()
  let descRef = React.createRef()
  let priorRef = React.createRef()
  let ownerRef = React.createRef()

  const { todo } = useSelector(state => state.todo)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(
      createTodoElementThunkCreator(
        nameRef.current.value,
        descRef.current.value,
        parseInt(priorRef.current.value),
        parseInt(ownerRef.current.value)
      )
    )
  }
  return (
    <Card className='my-3'>
      <Card.Header>
        <span className='text-uppercase'>Создать элемент ToDo </span>
      </Card.Header>
      <div>
        <Form onSubmit={handleClick}>
          <Card.Body>
            <Form.Group className='mb-3'>
              <Form.Label>Заголовок</Form.Label>
              <Form.Control ref={nameRef} type='text' required></Form.Control>
            </Form.Group>
            <Row>
              <Form.Group as={Col} md={6} className='mb-3'>
                <Form.Label>Список</Form.Label>
                <Form.Select ref={ownerRef}>
                  {todo?.map(elem => (
                    <option value={elem.id} key={elem.id}>
                      {elem.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={6} className='mb-3'>
                <Form.Label>Приоритет</Form.Label>
                <Form.Select ref={priorRef}>
                  <option value='1'>Обычный</option>
                  <option value='2'>Важный</option>
                  <option value='3'>Критичный</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Label>Описание</Form.Label>
              <Form.Control ref={descRef} as='textarea' rows={3}></Form.Control>
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
        </Form>
      </div>
    </Card>
  )
}
