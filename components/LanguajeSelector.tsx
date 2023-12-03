import { useRouter } from 'next/router'
import React from 'react'
import Select from 'react-select'
import { components } from 'react-select'

const { SingleValue, Option } = components

function IconSingleValue(props): JSX.Element {
  return (
    <SingleValue {...props}>
      <img
        src={props.data.image}
        style={{
          height: '20px',
          width: '20px',
          filter: 'invert(100%)',
          // borderRadius: '50%',
          marginRight: '10px',
        }}
      />
      {props.data.label}
    </SingleValue>
  )
}

function IconOption(props): JSX.Element {
  return (
    <Option {...props}>
      <img
        src={props.data.image}
        style={{
          height: '20px',
          width: '20px',
          filter: 'invert(100%)',
          // borderRadius: '50%',
          marginRight: '10px',
        }}
      />
      {props.data.label}
    </Option>
  )
}

export default function LanguajeSelector(): JSX.Element {
  const router = useRouter()
  const { pathname, asPath, query, locales, locale } = router
  const options = locales.map((x) => {
    return {
      value: x,
      label: x.toLocaleUpperCase(),
      image: '/images/world.png',
    }
  })

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  }

  return (
    <>
      <Select
        classNamePrefix="LanguajeSelector"
        options={options}
        components={{
          SingleValue: IconSingleValue,
          Option: IconOption,
        }}
        styles={customStyles}
        instanceId="language-select"
        isSearchable={false}
        defaultValue={options.find((x) => x.value === locale)}
        onChange={(value) => {
          router.push({ pathname, query }, asPath, { locale: value.value })
        }}
      />
    </>
  )
}
