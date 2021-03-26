import React, { useState } from 'react'

interface AddCharacterComponentProps {
  onAccept(name: string, initiativeRoll: number): void
  onClose(): void
}

export default function AddCharacterComponent(props: AddCharacterComponentProps) {
  const { onAccept, onClose } = props

  const [characterName, setCharacterName] = useState('')
  const [initiativeRoll, setInitiativeRoll] = useState(0)

  function addCharacterAndClose() {
    onAccept(characterName, initiativeRoll)
    onClose()
  }

  function addCharacterAndReset() {
    onAccept(characterName, initiativeRoll)
    setCharacterName('')
    setInitiativeRoll(0)
  }

  return (
    <div className="flex justify-center items-center fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-600 bg-opacity-40">
      <div className="flex flex-col justify-center gap-3 w-5/6 md:w-3/6 bg-white shadow-2xl p-6 rounded-md">
        <span className="flex flex-col md:flex-row justify-between">
          <label className="text-xl">Charactername</label>
          <input
            className="text-xl text-right border-b border-blue-400"
            type="text"
            value={characterName}
            onChange={(event) => setCharacterName(event.target.value)}
          />
        </span>
        <span className="flex flex-col md:flex-row justify-between">
          <label className="text-xl">Initiative Roll</label>
          <input
            className="text-xl text-right border-b border-blue-400"
            type="number"
            value={initiativeRoll}
            onChange={(event) => setInitiativeRoll(parseInt(event.target.value))}
          />
        </span>
        <span className="flex flex-col md:flex-row justify-end gap-2">
          <button
            className="p-2 md:w-2/6 text-white text-2xl bg-blue-400 hover:bg-blue-200 active:bg-blue-600 rounded-md"
            onClick={addCharacterAndClose}
          >
            Add
          </button>
          <button
            className="p-2 md:w-2/6 text-white text-2xl bg-gray-400 hover:bg-gray-200 active:bg-gray-600 rounded-md"
            onClick={addCharacterAndReset}
          >
            Add more
          </button>
          <button
            className="p-2 md:w-2/6 text-white text-2xl bg-red-400 hover:bg-red-200 active:bg-red-600 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  )
}
