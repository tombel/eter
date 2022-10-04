import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'english', label: 'EN' },
  { value: 'spanish', label: 'SP' },
]

export default function LanguajeSelector(): JSX.Element {
  return (
    <Select
      classNamePrefix="LanguajeSelector"
      options={options}
      defaultValue={{ value: 'english', label: 'EN' }}
    />
  )
}
