import { useRouter } from 'next/router'
import React from 'react'
import Select from 'react-select'

export default function LanguajeSelector(): JSX.Element {
  const router = useRouter()
  const { pathname, asPath, query, locales, locale } = router
  const options = locales.map((x) => {
    return {
      value: x,
      label: x.toLocaleUpperCase(),
    }
  })

  return (
    <Select
      classNamePrefix="LanguajeSelector"
      options={options}
      instanceId="language-select"
      defaultValue={options.find((x) => x.value === locale)}
      onChange={(value) => {
        router.push({ pathname, query }, asPath, { locale: value.value })
      }}
    />
  )
}
