import React from 'react'
import Select from 'react-select'

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
]

export default function AvatarSelector(): JSX.Element {
  return (
    <Select
      classNamePrefix="AvatarSelector"
      options={options}
      defaultValue={{ value: '1', label: '1' }}
    />
  )
}
