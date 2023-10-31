import React from 'react'

export default function SandboxIcon(): JSX.Element {
  return (
    <a href="https://sandbox.game/en" target="_blank" aria-label="Sandbox Icon" rel="noreferrer">
      <svg viewBox="0 0 64 63" className="w-40">
        <rect x="0.5" width="53.5862" height="53.5862" fill="#FF36B2"></rect>
        <path d="M0.5 53.5862H54.0862L63.5 63H9.91379L0.5 53.5862Z" fill="#CA037D"></path>
        <path d="M54.0862 0L63.5 9.41379V63L54.0862 53.5862V0Z" fill="#EF29A3"></path>
        <path
          fill="#F1F1F1"
          d="M18.6945 11.5862L15.7069 14.6261V26.792L18.6945 29.834H30.6407V35.916H24.6676V32.876H15.7069V38.958L18.6945 42H36.6159L39.6035 38.958V26.792L36.6159 23.7521H24.6676V17.6681H30.6407V20.7101H39.6035V14.6261L36.6159 11.5862H18.6945Z"
        ></path>
      </svg>
    </a>
  )
}
