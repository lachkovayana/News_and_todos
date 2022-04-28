import React from 'react'
import BtnNotDone from './BtnNotDone'
import BtnIsDone from './BtnIsDone'

export default function ButtonsComp (props) {
  if ((props.item)?.isDone) {
      return <BtnIsDone key={props.item.id}/>
    }
    return <BtnNotDone item={props}  key={props.item.id} />
}
