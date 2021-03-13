import React from 'react'

interface TrackerControlComponentProps {
  disabled: boolean
  onNext(): void
  onBack(): void
}

export default function TrackerControlComponent(props: TrackerControlComponentProps) {

  const {disabled, onNext, onBack} = props

  const buttonStylingClasses = "bg-red-600 hover:bg-red-400 active:bg-red-800 rounded-sm px-2 text-white shadow"

  return (
  <div className="flex justify-around w-full">
    <button className={buttonStylingClasses} onClick={onBack} disabled={disabled}>Back</button>
    <button className={buttonStylingClasses} onClick={onNext} disabled={disabled}>Next</button>
  </div>)
}