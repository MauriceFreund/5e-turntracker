import React from 'react'
import { Character } from '../model/character'

interface CharacterCardComponentProps {
  character: Character
  onDelete(): void
}

export default function CharacterCardComponent(props: CharacterCardComponentProps) {
  const { character, onDelete } = props

  const backgroundColorClass = character.isCharacterActive ? 'bg-green-300' : 'bg-white'

  const deleteIcon = (
    <svg className="h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )

  return (
    <div className={backgroundColorClass + ' shadow-lg rounded-sm flex justify-between items-center'}>
      <div className="w-4/6 md:w-5/6 my-8 mx-5 flex flex-col md:flex-row justify-around items-center text-2xl md:text-4xl text-center">
        <p className="w-3/6">{character.name}</p>
        <p className="w-3/6">{character.initiativeRoll}</p>
      </div>
      <div
        className="flex justify-center items-center h-full w-2/6 md:w-1/6 y-8 fill-current text-red-500"
        onClick={onDelete}
      >
        {deleteIcon}
      </div>
    </div>
  )
}
