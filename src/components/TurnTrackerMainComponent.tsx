import React, { useState } from 'react'

import { Character } from '../model/character'
import CharacterCreationButton from './CharacterCreationButton'
import TrackerControlComponent from './TrackerControlComponent'
import TurnOrderListComponent from './TurnOrderListComponent'

export default function TurnTrackerMainComponent() {
  const initialCharacters: Character[] = [
    { name: 'Triborya', initiativeRoll: 7, isCharacterActive: true },
    { name: 'Herk', initiativeRoll: 14, isCharacterActive: false },
    { name: 'Lucas', initiativeRoll: 1, isCharacterActive: false },
  ]

  const [characters, setCharacters] = useState<Character[]>([])
  const [isListEditable, setIsListEditable] = useState(false)

  function pushNewCharacter() {
    const isNewCharacterActive = characters.length === 0
    const newCharacter = { name: 'Charactername', initiativeRoll: 10, isCharacterActive: isNewCharacterActive }
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

  function updateCharacter(index: number, updatedCharacter: Character) {
    let updatedCharacters = [...characters]
    updatedCharacters[index] = updatedCharacter
    setCharacters(updatedCharacters)
  }

  return (
    <div className="flex flex-col items-center gap-3 w-5/6">
      <div className=" w-full flex gap-2">
        <button
          className="bg-green-600 hover:bg-green-400 active:bg-green-800 w-full rounded-sm p-2 text-center text-white shadow"
          onClick={sortCharacterList}
        >
          Sort
        </button>
        <CharacterCreationButton onClick={pushNewCharacter} />
        <button
          className="bg-green-600 hover:bg-green-400 active:bg-green-800 w-full rounded-sm p-2 text-center text-white shadow"
          onClick={() => setIsListEditable(!isListEditable)}
        >
          {isListEditable ? 'Save Edits' : 'Edit Characters'}
        </button>
      </div>
      <TurnOrderListComponent
        characters={characters}
        isListEditable={isListEditable}
        onCharacterUpdate={updateCharacter}
      />
      <TrackerControlComponent
        disabled={characters.length === 0}
        onNext={() => moveActiveCharacterToken(true)}
        onBack={() => moveActiveCharacterToken(false)}
      />
    </div>
  )
}
