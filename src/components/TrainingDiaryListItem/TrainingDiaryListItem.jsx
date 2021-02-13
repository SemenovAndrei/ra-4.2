import React from 'react'
import './TrainingDiaryListItem.css'
import PropTypes from 'prop-types'

function TrainingDiaryListItem(props) {
  const date = props.item.date.split('-').reverse().join('.')

  const onDelete = (event) => {
    props.onDelete(event.target.dataset.id)
  }

  const onEdit = (event) => {
    props.onEdit(event.target.nextSibling.dataset.id)
  }

  return (
    <div className="TrainingDiaryListItem">
      <div className="TrainingDiaryList-data">{date}</div>
      <div className="TrainingDiaryList-length">{props.item.length}</div>
      <div className="TrainingDiaryList-controls">
        <button
          className="TrainingDiaryList-controls-edit material-icons"
          onClick={onEdit}
        >
          mode
        </button>
        <button
          data-id={props.item.id}
          className="TrainingDiaryList-controls-delete material-icons"
          onClick={onDelete}
        >
          clear
        </button>
      </div>
    </div>
  )
}

TrainingDiaryListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default TrainingDiaryListItem
