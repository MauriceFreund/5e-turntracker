import React, { useState } from 'react'
import AddCharacterComponent from './AddCharacterComponent'

interface TrackerControlComponentProps {
  onNext(): void
  onBack(): void
  onAdd(name: string, initiativeRoll: number): void
}

export default function TrackerControlComponent(props: TrackerControlComponentProps) {
  const { onNext, onBack, onAdd } = props

  const [showAddCharacterComponent, setShowAddCharacterComponent] = useState(false)

  const buttonClasses =
    'hover:bg-white hover:bg-opacity-25 p-2 rounded-md flex justify-center items-center fill-current stroke-current text-white hover:text-red-500 active:text-red-800'

  function renderAddCharacterComponent() {
    return (
      showAddCharacterComponent && (
        <AddCharacterComponent onAccept={onAdd} onClose={() => setShowAddCharacterComponent(false)} />
      )
    )
  }

  return (
    <div className="flex gap-2 justify-around w-full">
      <div className={buttonClasses} onClick={onBack}>
        <svg className="h-6" viewBox="0 0 30 30">
          <path d="M 30 0 L 0 15 L 30 30" />
        </svg>
      </div>
      <div className={buttonClasses} onClick={() => setShowAddCharacterComponent(true)}>
        <svg className="h-6" viewBox="0 0 30 30">
          <line x1="0" y1="15" x2="30" y2="15" strokeWidth="4" />
          <line x1="15" y1="0" x2="15" y2="30" strokeWidth="4" />
        </svg>
      </div>
      <div className={buttonClasses} onClick={onNext}>
        <svg className="h-6" viewBox="0 0 30 30">
          <path d="M 0 0 L 30 15 L 0 30" />
        </svg>
      </div>
      {renderAddCharacterComponent()}
    </div>
  )
}
