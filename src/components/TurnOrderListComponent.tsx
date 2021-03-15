import React, { useMemo } from 'react'
import { Character } from '../model/character'
import CharacterCardComponent from './CharacterCardComponent'

interface TurnTrackerMainComponentProps {
  characters: Character[]
  isListEditable: boolean
  onCharacterUpdate(index: number, updatedCharacter: Character): void
}

export default function TurnTrackerMainComponent(props: TurnTrackerMainComponentProps) {
  const { characters, isListEditable, onCharacterUpdate } = props

  const characterList = (
    <ul className="flex flex-col gap-2">
      {characters.map((character, index) => {
        return (
          <li key={index}>
            <CharacterCardComponent
              character={character}
              isEditable={isListEditable}
              onCharacterUpdate={(char) => onCharacterUpdate(index, char)}
            />
          </li>
        )
      })}
    </ul>
  )

  return <div className="w-full">{characterList}</div>
}
