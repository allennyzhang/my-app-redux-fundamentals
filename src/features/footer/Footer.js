import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { colorFilterChanged, statusFilterChanged } from '../filters/filtersSlice'
import { selectTodos } from '../todos/todosSlice'
import Actions from './Actions'
import StatusFilter from './StatusFilter'
import ColorFilters from './ColorFilters'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = selectTodos(state).filter(
      (todo) => !todo.completed
    )
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector((state) => state.filters)

  const onColorChange = useCallback((color, changeType) =>
    dispatch(colorFilterChanged(color, changeType)
    ), [dispatch])

  const onStatusChange = useCallback(
    status => dispatch(statusFilterChanged(status)
    ), [dispatch])

  return (
    <footer className="footer">
      <Actions />
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
