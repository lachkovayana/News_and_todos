import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import ButtonsComp from './ButtonsComp'

export default function ToDoElement (props) {
 var isCompleted = props.item.isDone ? 'isCompleted' : ''
  return (
    <Card>
      <blockquote className={`mb-0 ${isCompleted}`}>
        <Row className='mx-0'>
          <Col
            md={9}
            className={` pr${props.item.priority} highlited d-flex align-items-center`}
          >
            <ul className='list-unstyled my-auto'>
              <li>
                <ul className='list-inline'>
                  <li className='list-inline-item text-uppercase'>
                    <b> {props.item.name} </b>
                  </li>
                  <li className='list-inline-item'>{props.item.date}</li>
                </ul>
              </li>
              <li> {props.item.description} </li>
            </ul>
          </Col>
          <Col md={3} className='d-flex justify-content-end '>
          <ButtonsComp item={props.item} ownerId={props.ownerId}/>
          </Col>
        </Row>
      </blockquote>
    </Card>
  )
}
