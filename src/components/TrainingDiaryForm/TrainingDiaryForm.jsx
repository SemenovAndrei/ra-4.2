import React from 'react'
import './TrainingDiaryForm.css'
import PropTypes from 'prop-types'
import checkValid from './checkValid'

function TrainingDiaryForm(props) {
  const form = props.form

  const onChange = (event) => {
    props.onChange(event)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (checkValid(event.target[0]) || checkValid(event.target[1])) {
      return
    }

    return props.onSubmit(event.target[0].value, event.target[1].value)
  }

  return (
    <form className="TrainingDiaryForm" onSubmit={onSubmit}>
      <label className="TrainingDiaryForm-labelDate" htmlFor="fieldDate">
        Дата(ДД.ММ.ГГ)
        <input
          type="date"
          className="TrainingDiaryForm-fieldDate"
          id="fieldDate"
          name="fieldDate"
          value={form.fieldDate || form.name}
          onChange={onChange}
        />
      </label>
      <label className="TrainingDiaryForm-labelDate" htmlFor="fieldLength">
        Пройдено км
        <input
          type="text"
          className="TrainingDiaryForm-fieldLength"
          id="fieldLength"
          name="fieldLength"
          value={form.fieldLength || form.name}
          onChange={onChange}
        />
      </label>
      <button className="TrainingDiaryForm-buttonAdd">OK</button>
    </form>
  )
}

TrainingDiaryForm.propTypes = {
  form: PropTypes.object.isRequired,
}

export default TrainingDiaryForm
