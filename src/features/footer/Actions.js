import React from "react"
import { useDispatch } from "react-redux"
import { completedTodosCleared, allTodosCompleted } from '../todos/todosSlice'

const Actions = () => {
    const dispatch = useDispatch()
    const onMarkCompletedClicked = () => dispatch(allTodosCompleted())
    const onClearCompletedClicked = () => dispatch(completedTodosCleared())

    return (
        <div className="actions">
            <h5>Actions</h5>
            <button className="button" onClick={onMarkCompletedClicked}>
                Mark All Completed
            </button>
            <button className="button" onClick={onClearCompletedClicked}>
                Clear Completed
            </button>
        </div>
    )
}
export default Actions