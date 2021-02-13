import React from 'react'
import './TrainingDiaryList.css'
import PropTypes from 'prop-types'
import './TrainingDiaryList.css'
import TrainingDiaryListItem from '../TrainingDiaryListItem/TrainingDiaryListItem'

function TrainingDiaryList(props) {
  const onDelete = (id) => {
    props.onDelete(id)
  }

  const onEdit = (id) => {
    props.onEdit(id)
  }

  return (
    <div className="TrainingDiaryList">
      <div className="TrainingDiaryList-titles">
        <div className="TrainingDiaryList-title">Дата(ДД.ММ.ГГ)</div>
        <div className="TrainingDiaryList-title">Пройдено км</div>
        <div className="TrainingDiaryList-title">Действия</div>
      </div>
      <ul className="TrainingDiaryList-list">
        {props.data.map((o) => (
          <li key={o.id} className="TrainingDiaryList-list-item">
            <TrainingDiaryListItem item={o} onDelete={onDelete} onEdit={onEdit} />
          </li>
        ))}
      </ul>
      <div className="TrainingDiaryList-total">
        {props.data.reduce((a, b) => a + +b.length, 0)}Km
      </div>
    </div>
  )
}

TrainingDiaryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default TrainingDiaryList
