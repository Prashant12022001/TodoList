import React from 'react'
import { TodoItem } from "./TodoItem";
import Toast from 'react-bootstrap/Toast';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>
        Todos List
      </h3>
      {props.todos.length === 0 ? <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Server </strong>
          <small>" 11 mins ago"</small>
        </Toast.Header>
        <Toast.Body>NO more Todos Left</Toast.Body>
      </Toast> :

        props.todos.map((todo) => {

          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
            </>
          )

        })

      }


    </div>
  )
}
