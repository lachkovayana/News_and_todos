import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addLike} from '../reducers/news/actions'

function getFormattedDate (datetime) {
  var date = new Date(datetime)
  let year = date.getFullYear()
  let month = (1 + date.getMonth()).toString().padStart(2, '0')
  let day = date
    .getDate()
    .toString()
    .padStart(2, '0')
  return day + '.' + month + '.' + year
}

export default function NewsItem (props) {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(addLike(props.post.id))
  }

  return (
    <Card className='mb-4'>
      <Card.Header>
        <Row>
          <Card.Title className='col-8 h6 my-auto d-flex justify-content-start'>
            {props.post.title}
          </Card.Title>
          <Card.Subtitle className='col-4 my-auto small text-muted text-right d-flex justify-content-end'>
            {props.post.tags}
          </Card.Subtitle>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text className='d-flex justify-content-start '>
          {props.post.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center'>
        <span className=''>
          <b>Date:</b>&nbsp;{getFormattedDate(props.post.date)}
        </span>
        <span onClick={onHandleClick}>
          <em>{props.post.serviceInfo?.likes}</em>
          <i className='fas fa-heart mx-2 heart'></i>
        </span>
      </Card.Footer>
    </Card>
  )
}
