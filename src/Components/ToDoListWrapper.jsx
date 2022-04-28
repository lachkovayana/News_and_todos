import React from 'react'
import { Card } from 'react-bootstrap'
import { Tab, Row, Col, Button, Tabs } from 'react-bootstrap'
import ToDoElement from './ToDoElement'
import '../styles/style.css'
import { useDispatch } from 'react-redux'
import { deleteTodoListThunkCreator } from '../reducers/todo/actions'

export default function ToDoListWrapper (props) {
  const dispatch = useDispatch()
  const deleteTodo = (id) => {
    dispatch(deleteTodoListThunkCreator(id))
  }
  
  return (
    <>
      <Card>
        <Tabs className='nav-fill text-dark mx-3 my-3'  >
          {props.lists?.map(elem => (
            <Tab eventKey={elem.id} title={elem.name} key={elem.id}>
              <Row className='mx-1 px-2 my-3'>
                <h3 className='col-9 px-0'>{elem.name}</h3>
                <Col
                  xs={3}
                  className='text-right px-0 d-flex justify-content-end mx-0'
                >
                  <Button
                    onClick={() => deleteTodo(elem.id)}
                    className='btn btn-danger'
                  >
                    <i
                      className='fas fa-trash-alt'
                      style={{ marginRight: 5 }}
                    ></i>
                    Удалить список
                  </Button>
                </Col>
              </Row>
              {elem.items.map(item => (
                <ToDoElement ownerId={elem.ownerId} item={item} key={item.id} />
              ))}
            </Tab>
          ))}
        </Tabs>
      </Card>
      
      {/* <Card>
        <Card.Header>
          <Nav variant='tabs nav-fill'>
            {props.lists[0]?.map(elem => (
              <Nav.Link href={`#${elem.id}`}  key={elem.id}>
                {elem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Card.Header>
        <Card.Body>
        <Row className='mx-1 px-2 my-3'>
                <h3 className='col-9 px-0'>sssss</h3>
                <Col
                  xs={3}
                  className='text-right px-0 d-flex justify-content-end mx-0'
                >
                  <Button onClick={deleteTodo} className='btn btn-danger'>
                    <i
                      className='fas fa-trash-alt'
                      style={{ marginRight: 5 }}
                    ></i>
                    Удалить список
                  </Button>
                </Col>
              </Row>
          {post.items.map(elem => {
            return <ToDoElement item={elem} key = {elem.id}></ToDoElement>;
          })}
        </Card.Body>
      </Card> */}
    </>
  )
}
