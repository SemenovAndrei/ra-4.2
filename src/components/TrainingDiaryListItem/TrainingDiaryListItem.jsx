import React from 'react'
import './TrainingDiaryListItem.css'
import PropTypes from 'prop-types'

function TrainingDiaryListItem(props) {
  const date = props.item.date.split('-').reverse().join('.')

  const onDelete = (event) => {
    props.onDelete(event.target.dataset.id)
  }
  return (
    <div className="TrainingDiaryListItem">
      <div className="TrainingDiaryList-data">{date}</div>
      <div className="TrainingDiaryList-length">{props.item.length}</div>
      <div className="TrainingDiaryList-controls">
        <button className="TrainingDiaryList-controls-edit material-icons">mode</button>
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
