import React, { useState } from 'react'

export const AddTodo = (addTodo) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Desc blank")
        }
        addTodo.addTodo(title, desc);

    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Todo Description</label>
                    <input type="Text" value={desc} onChange={(e) => { setDesc(e.target.value) }} class="form-control" id="desc" />
                </div>

                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

