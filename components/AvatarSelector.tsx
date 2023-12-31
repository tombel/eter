import React from 'react'
import Select from 'react-select'

export interface AvatarSelectorProps {
  max?: number
  quantity: number
  onChange?: (value) => void
  disabled: boolean
}

export default function AvatarSelector({
  max = 1,
  quantity,
  onChange,
  disabled,
}: AvatarSelectorProps): JSX.Element {
  const options = Array(max || 1)
    .fill(null)
    .map((_x, index) => {
      const value = `${index + 1}`
      return {
        value: value,
        label: value,
      }
    })

  return (
    <Select
      classNamePrefix="AvatarSelector"
      value={options.find((x) => x.value === String(quantity))}
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
      isDisabled={disabled}
      isSearchable={false}
      instanceId="avatar-select"
    />
  )
}
