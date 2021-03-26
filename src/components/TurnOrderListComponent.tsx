import React, { useMemo } from 'react'
import { Character } from '../model/character'
import CharacterCardComponent from './CharacterCardComponent'

interface TurnTrackerMainComponentProps {
  characters: Character[]
  onCharacterDelete(index: number): void
}

export default function TurnTrackerMainComponent(props: TurnTrackerMainComponentProps) {
  const { characters, onCharacterDelete } = props

  const characterList = (
    <ul className="flex flex-col gap-2">
      {characters.map((character, index) => {
        return (
          <li key={index}>
            <CharacterCardComponent character={character} onDelete={() => onCharacterDelete(index)} />
          </li>
        )
      })}
    </ul>
  )

  return <div className="w-full h-full overflow-y-auto">{characterList}</div>
}
