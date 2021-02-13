import React, { useState } from 'react'
import './TrainingDiary.css'
import PropTypes from 'prop-types'
import TrainingDiaryForm from '../TrainingDiaryForm/TrainingDiaryForm'
import TrainingDiaryList from '../TrainingDiaryList/TrainingDiaryList'
import { nanoid } from 'nanoid'

function TrainingDiary(props) {
  const [form, setForm] = useState({
    name: '',
    id: '',
  })

  const [data, setData] = useState(props.data)

  const handleSubmit = (fieldDate, fieldLength) => {
    data.push({ id: nanoid(), date: fieldDate, length: fieldLength })

    setForm({
      name: '',
      id: '',
    })
  }

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleDelete = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id))
  }

  const handleEdit = (id) => {
    if (form.fieldDate && form.fieldLength) {
      data.push({ id: nanoid(), date: form.fieldDate, length: form.fieldLength })
    }
    const item = data.find((el) => el.id === id)
    setForm({ ...form, fieldDate: item.date, fieldLength: item.length })
    handleDelete(id)
  }

  return (
    <div className="TrainingDiary">
      <div className="TrainingDiary-form">
        <TrainingDiaryForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
      <div className="TrainingDiary-list">
        <TrainingDiaryList
          data={data.sort((a, b) => {
            if (a.date > b.date) {
              return -1
            }
            return 1
          })}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  )
}

TrainingDiary.defaultProps = {
  data: [],
}

TrainingDiary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default TrainingDiary
