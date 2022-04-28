import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoElementThunkCreator } from '../reducers/todo/actions';
import { checkTodoElementThunkCreator } from '../reducers/todo/actions';

export default function BtnNotDone (props) {
  const distpatch = useDispatch();
  
  const handleDelete = () => {
    distpatch(deleteTodoElementThunkCreator(props.item.ownerId, props.item.item.id));
  }
  
  const handleCheck = () => {
    distpatch(checkTodoElementThunkCreator(props.item.ownerId, props.item.item.id));
  }

  return (
    <div className='btn-group my-3 mr-2' role='group'>
      <button onClick={handleCheck} type='button' className='btn btn-outline-success'>
        <i className='fas fa-check'> </i>
      </button>
      <button type='button' className='btn btn-outline-warning editButton'>
        <i className='fas fa-pen'> </i>
      </button>
      <button onClick={handleDelete} type='button' className='btn btn-outline-danger'>
        <i className='fas fa-trash-alt'> </i>
      </button>
    </div>
  )
}
