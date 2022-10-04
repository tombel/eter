import React from 'react'

export default function CustomButton(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element {
  return <button className="" {...props} />
}
