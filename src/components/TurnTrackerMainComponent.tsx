import React, {useState} from 'react'

import {Character} from '../model/character'
import CharacterCreationButton from './CharacterCreationButton'
import TrackerControlComponent from './TrackerControlComponent'
import TurnOrderListComponent from './TurnOrderListComponent'

export default function TurnTrackerMainComponent() {

  const initialCharacter: Character[] = [
    {name: "Triborya", initiativeRoll: 7},
    {name: "Herk", initiativeRoll: 14},
    {name: "Lucas", initiativeRoll: 1}
  ]

  const [characters, setCharacters] = useState<Character[]>(initialCharacter)

  function pushNewCharacter() {
    const newCharacter = {name: "Charactername", initiativeRoll: 10 }
    setCharacters([...characters, newCharacter])
  }

  function rollForwards() {
    if (characters.length > 0) {
      const [firstCharacter, ...rest] = characters
      setCharacters([...rest, firstCharacter])
    }
  }

  function rollBackwards() {
    if (characters.length > 0) {
      const lastCharacter = characters.pop()
      const rest = characters.slice(0, characters.length)
      setCharacters([lastCharacter!, ...rest])
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 w-5/6">
      <h1 className="text-4xl w-full underline">5e Turntracker</h1>
      <TurnOrderListComponent characters={characters}/>
      <CharacterCreationButton onClick={pushNewCharacter}/>
      <TrackerControlComponent 
        disabled={characters.length === 0}
        onNext={rollForwards} 
        onBack={rollBackwards}
      />
    </div>
  )

}