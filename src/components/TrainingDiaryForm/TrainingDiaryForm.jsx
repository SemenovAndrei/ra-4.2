import React from 'react'
import './TrainingDiaryForm.css'
import PropTypes from 'prop-types'

function TrainingDiaryForm(props) {
  const form = props.form

  const onChange = (event) => {
    props.onChange(event)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    Array.from(event.target).forEach((o) => {
      if (!o.name) {
        return
      }

      if (o.value === '') {
        const field = document.querySelector(`.${o.classList.value}`)
        field.style.borderColor = 'red'
        setTimeout(() => field.removeAttribute('style'), 1000)
        return
      }

      return props.onSubmit(event.target[0].value, event.target[1].value)
    })

    // if (!event.target[1].value) {
    //   const field = document.querySelector('.TrainingDiaryForm-fieldLength')
    //   field.classList.add('notValid')
    //   setTimeout(() => field.classList.remove('notValid'), 1000)
    // }

    // props.onSubmit(event.target[0].value, event.target[1].value)
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
