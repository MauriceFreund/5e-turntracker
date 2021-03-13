import React, {useMemo} from 'react'
import { Character } from '../model/character'
import CharacterCardComponent from './CharacterCardComponent'

interface TurnTrackerMainComponentProps {
  characters: Character[]
}

export default function TurnTrackerMainComponent(props: TurnTrackerMainComponentProps) {

  const {characters} = props
  
  const characterList = useMemo(() => {
    return <ul className="flex flex-col gap-2">
      {characters.map((character) => {
        return <li><CharacterCardComponent character={character}/></li>
      })}
    </ul>
  }, [characters])

  return (
    <div className="w-full">{characterList}</div>
  )

}