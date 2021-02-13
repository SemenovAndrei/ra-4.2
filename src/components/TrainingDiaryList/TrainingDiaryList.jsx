import React from 'react'
import './TrainingDiaryList.css'
import PropTypes from 'prop-types'
import './TrainingDiaryList.css'
import TrainingDiaryListItem from '../TrainingDiaryListItem/TrainingDiaryListItem'

function TrainingDiaryList(props) {
  console.log(props.data)
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
            <TrainingDiaryListItem item={o} />
          </li>
        ))}
      </ul>
    </div>
  )
}

TrainingDiaryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TrainingDiaryList
