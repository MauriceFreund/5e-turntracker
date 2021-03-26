import React, { useState } from 'react'

import { Character } from '../model/character'
import TrackerControlComponent from './TrackerControlComponent'
import TurnOrderListComponent from './TurnOrderListComponent'

export default function TurnTrackerMainComponent() {
  const [characters, setCharacters] = useState<Character[]>([])

  function sortCharacterList(list: Character[]): Character[] {
    const sortedCharacterList = [...list]
    sortedCharacterList.sort((charA, charB) => charB.initiativeRoll - charA.initiativeRoll)
    return sortedCharacterList
  }

  function addCharacter(name: string, initiativeRoll: number) {
    if (name !== '' && initiativeRoll) {
      const isNewCharacterActive = characters.length === 0
      const newCharacter = { name: name, initiativeRoll: initiativeRoll, isCharacterActive: isNewCharacterActive }
      const newCharacterList = [...characters, newCharacter]
      setCharacters(sortCharacterList(newCharacterList))
    }
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

  function deleteCharacter(index: number) {
    let updatedCharacters = [...characters]
    const deletedCharacter = updatedCharacters[index]
    if (deletedCharacter.isCharacterActive) {
      moveActiveCharacterToken(true)
    }
    updatedCharacters.splice(index, 1)
    setCharacters(updatedCharacters)
  }

  return (
    <div className="flex flex-col items-center gap-3 w-5/6 h-4/6">
      <TrackerControlComponent
        onNext={() => moveActiveCharacterToken(true)}
        onBack={() => moveActiveCharacterToken(false)}
        onAdd={addCharacter}
      />
      <TurnOrderListComponent characters={characters} onCharacterDelete={deleteCharacter} />
    </div>
  )
}
