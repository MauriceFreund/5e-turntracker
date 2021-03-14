import React, { useMemo, useState } from 'react'
import { Character } from '../model/character'

interface CharacterCardComponentProps {
  character: Character
  isEditable: boolean
  onCharacterUpdate(newCharacter: Character): void
  onCharacterDelete(): void
}

export default function CharacterCardComponent(props: CharacterCardComponentProps) {
  const { character, isEditable, onCharacterUpdate } = props

  const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
  )

  const trashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )

  const activePlayerMarker = useMemo(() => {
    return (
      <div className="flex flex-col justify-center w-7 fill-current text-green-500">
        {character.isCharacterActive ? arrowIcon : null}
      </div>
    )
  }, [character.isCharacterActive])

  const deleteButton = useMemo(() => {}, [])

  const characterNameField = useMemo(() => {
    return isEditable ? (
      <input
        className="border-b text-right"
        type="text"
        value={character.name}
        onChange={(event) =>
          onCharacterUpdate({
            name: event.target.value,
            initiativeRoll: character.initiativeRoll,
            isCharacterActive: character.isCharacterActive,
          })
        }
      />
    ) : (
      <span>{character.name}</span>
    )
  }, [character, isEditable])

  const initiativeRollField = useMemo(() => {
    return isEditable ? (
      <input
        className="border-b text-right"
        type="number"
        value={character.initiativeRoll}
        onChange={(event) => {
          if (true) {
            onCharacterUpdate({
              name: character.name,
              initiativeRoll: parseInt(event.target.value),
              isCharacterActive: character.isCharacterActive,
            })
          }
        }}
      />
    ) : (
      <span>{character.initiativeRoll}</span>
    )
  }, [character, isEditable])

  return (
    <div className={'bg-white shadow-lg py-3 px-5 flex justify-start gap-3'}>
      {activePlayerMarker}
      <div className="w-full">
        <div className="flex justify-between">
          <span className="font-bold">Name: </span>
          {characterNameField}
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Initiative roll: </span>
          {initiativeRollField}
        </div>
      </div>
    </div>
  )
}
