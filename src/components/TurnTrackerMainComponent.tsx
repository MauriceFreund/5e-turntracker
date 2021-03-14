import React, {useState} from 'react'

import {Character} from '../model/character'
import CharacterCreationButton from './CharacterCreationButton'
import TrackerControlComponent from './TrackerControlComponent'
import TurnOrderListComponent from './TurnOrderListComponent'

export default function TurnTrackerMainComponent() {

  const initialCharacter: Character[] = [
    {name: "Triborya", initiativeRoll: 7, isCharacterActive: true},
    {name: "Herk", initiativeRoll: 14, isCharacterActive: false},
    {name: "Lucas", initiativeRoll: 1, isCharacterActive: false}
  ]

  const [characters, setCharacters] = useState<Character[]>(initialCharacter)

  function pushNewCharacter() {
    const newCharacter = {name: "Charactername", initiativeRoll: 10, isCharacterActive: false}
    setCharacters([...characters, newCharacter])
  }

  function findNextValidIndexOfCharacterList(currentIndex: number, listLength: number) {
    return currentIndex < listLength - 1 ? currentIndex + 1 : 0
  }

  function findPreviousValidIndexOfCharacterList(currentIndex: number, listLength: number) {
    return currentIndex > 0 ? currentIndex - 1 : listLength - 1
  }

  function moveActiveCharacterToken(moveForwards: boolean) {
    const activeCharacterIndex = characters.findIndex((char) => char.isCharacterActive)
    const nextIndex = moveForwards 
                      ? findNextValidIndexOfCharacterList(activeCharacterIndex, characters.length)
                      : findPreviousValidIndexOfCharacterList(activeCharacterIndex, characters.length)
    const newCharacterList = [...characters]
    newCharacterList[activeCharacterIndex].isCharacterActive = false
    newCharacterList[nextIndex].isCharacterActive = true
    setCharacters(newCharacterList)
  }

  function sortCharacterList() {
    const sortedCharacterList = [...characters]
    sortedCharacterList.sort((charA, charB) => charB.initiativeRoll - charA.initiativeRoll)
    setCharacters(sortedCharacterList)
  }

  return (
    <div className="flex flex-col items-center gap-3 w-5/6">
      <h1 className="text-4xl w-full underline">5e Turntracker</h1>
      <button 
        className="bg-green-600 hover:bg-green-400 active:bg-green-800 w-full rounded-sm p-2 text-center text-white shadow"
        onClick={sortCharacterList}
      >
        Sort by initiative roll
      </button>
      <TurnOrderListComponent characters={characters}/>
      <CharacterCreationButton onClick={pushNewCharacter}/>
      <TrackerControlComponent 
        disabled={characters.length === 0}
        onNext={() => moveActiveCharacterToken(true)} 
        onBack={() => moveActiveCharacterToken(false)}
      />
    </div>
  )

}